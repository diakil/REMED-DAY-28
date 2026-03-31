import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

function MainLayout() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
