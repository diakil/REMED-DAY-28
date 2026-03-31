import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import AlertMessage from '../../../components/common/AlertMessage'
import Loader from '../../../components/common/Loader'
import useUserDetail from '../hooks/useUserDetail'
import { createAvatarFallback } from '../utils/avatarFallback'

function UserDetailPage() {
  const { id } = useParams()
  const { user, loading, error } = useUserDetail(id)
  const fallbackAvatar = useMemo(
    () => createAvatarFallback(user?.first_name, user?.last_name),
    [user?.first_name, user?.last_name],
  )

  return (
    <section className="mx-auto detail-card">
      <Link to="/users" className="btn btn-link px-0 mb-3">
        &larr; Kembali ke daftar user
      </Link>

      {loading && <Loader text="Memuat detail user..." />}
      <AlertMessage message={error} />

      {!loading && !error && user ? (
        <article className="card shadow-sm">
          <div className="card-body text-center">
            <img
              src={user.avatar || fallbackAvatar}
              alt={user.first_name}
              className="rounded-circle mb-3 user-detail-avatar"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackAvatar
              }}
            />
            <h1 className="h4">
              {user.first_name} {user.last_name}
            </h1>
            <p className="text-muted mb-0">{user.email}</p>
          </div>
        </article>
      ) : null}
    </section>
  )
}

export default UserDetailPage
