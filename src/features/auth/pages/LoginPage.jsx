import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AlertMessage from '../../../components/common/AlertMessage'
import AuthForm from '../components/AuthForm'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: 'eve.holt@reqres.in', password: 'cityslicka' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const from = location.state?.from?.pathname || '/users'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!form.email.includes('@')) {
      setError('Format email tidak valid.')
      return
    }

    setLoading(true)
    try {
      await login(form)
      setSuccessMessage('Login berhasil, mengarahkan ke dashboard...')
      setTimeout(() => navigate(from, { replace: true }), 500)
    } catch (err) {
      setError(err?.response?.data?.error || 'Login gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-4">
      <AuthForm
        title="Login"
        email={form.email}
        password={form.password}
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        submitLabel="Masuk"
      />
      <div className="mx-auto mt-3 auth-card">
        <AlertMessage message={successMessage} variant="success" />
        <p className="mb-0 text-center">
          Belum punya akun? <Link to="/register">Register di sini</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
