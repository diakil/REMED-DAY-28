import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <h1 className="h3">Halaman tidak ditemukan</h1>
      <p className="text-muted">Periksa kembali URL yang Anda akses.</p>
      <Link to="/login" className="btn btn-primary">
        Ke Login
      </Link>
    </div>
  )
}

export default NotFoundPage
