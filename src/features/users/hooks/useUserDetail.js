import { useEffect, useState } from 'react'
import { getUserById } from '../../../services/userService'

export default function useUserDetail(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function fetchUserDetail() {
      setLoading(true)
      setError('')
      try {
        const response = await getUserById(userId)
        if (!ignore) setUser(response?.data || null)
      } catch (err) {
        if (!ignore) {
          setError(err?.response?.status === 404 ? 'User tidak ditemukan.' : 'Gagal memuat detail user.')
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    fetchUserDetail()
    return () => {
      ignore = true
    }
  }, [userId])

  return { user, loading, error }
}
