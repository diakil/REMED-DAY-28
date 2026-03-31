import { useState } from 'react'
import AlertMessage from '../../../components/common/AlertMessage'
import Loader from '../../../components/common/Loader'
import useUsers from '../hooks/useUsers'
import UserCard from '../components/UserCard'
import Pagination from '../components/Pagination'

function UsersListPage() {
  const [page, setPage] = useState(1)
  const { users, totalPages, loading, error } = useUsers(page)

  return (
    <section>
      <header className="mb-4">
        <h1 className="h4">User Management Dashboard</h1>
        <p className="text-muted mb-0">Daftar user dari Reqres API dengan pagination.</p>
      </header>

      {loading && <Loader text="Memuat daftar user..." />}
      <AlertMessage message={error} />

      {!loading && !error && users.length === 0 ? (
        <p className="text-muted">Belum ada data user.</p>
      ) : null}

      <div className="row g-3">
        {users.map((user) => (
          <div className="col-12 col-sm-6 col-lg-4" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>

      {!loading && !error && users.length > 0 ? (
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      ) : null}
    </section>
  )
}

export default UsersListPage
