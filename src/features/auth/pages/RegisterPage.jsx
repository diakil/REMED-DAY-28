import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AlertMessage from '../../../components/common/AlertMessage'
import AuthForm from '../components/AuthForm'

function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [form, setForm] = useState({ email: 'eve.holt@reqres.in', password: 'pistol' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

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

    if (form.password.trim().length < 6) {
      setError('Password minimal 6 karakter.')
      return
    }

    setLoading(true)
    try {
      await register(form)
      setSuccessMessage('Register berhasil. Anda akan diarahkan ke dashboard...')
      setTimeout(() => navigate('/users', { replace: true }), 500)
    } catch (err) {
      setError(err?.response?.data?.error || 'Register gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-4">
      <AuthForm
        title="Register"
        email={form.email}
        password={form.password}
        onEmailChange={handleChange}
        onPasswordChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        submitLabel="Daftar"
      />
      <div className="mx-auto mt-3 auth-card">
        <AlertMessage message={successMessage} variant="success" />
        <p className="mb-0 text-center">
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
