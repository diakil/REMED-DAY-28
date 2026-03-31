import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { createAvatarFallback } from '../utils/avatarFallback'

function UserCard({ user }) {
  const fallbackAvatar = useMemo(
    () => createAvatarFallback(user.first_name, user.last_name),
    [user.first_name, user.last_name],
  )

  return (
    <article className="card h-100 shadow-sm">
      <img
        src={user.avatar || fallbackAvatar}
        className="card-img-top user-avatar"
        alt={user.first_name}
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = fallbackAvatar
        }}
      />
      <div className="card-body">
        <h2 className="h6 mb-1">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-muted mb-3">{user.email}</p>
        <Link to={`/users/${user.id}`} className="btn btn-outline-primary btn-sm">
          Lihat Detail
        </Link>
      </div>
    </article>
  )
}

export default UserCard
