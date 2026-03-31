import { useEffect, useState } from 'react'
import { getUsers } from '../../../services/userService'

export default function useUsers(page) {
  const [data, setData] = useState({ users: [], totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function fetchUsers() {
      setLoading(true)
      setError('')
      try {
        const response = await getUsers(page)
        if (!ignore) {
          setData({
            users: response?.data || [],
            totalPages: response?.total_pages || 1,
          })
        }
      } catch (err) {
        if (!ignore) {
          setError(err?.response?.data?.error || 'Gagal memuat daftar user.')
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchUsers()
    return () => {
      ignore = true
    }
  }, [page])

  return { ...data, loading, error }
}
