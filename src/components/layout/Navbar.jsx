import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../features/auth/hooks/useAuth'

function Navbar() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">
          Reqres Dashboard
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn-outline-primary btn-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Register
                </Link>
              </>
            ) : (
              <button type="button" className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
