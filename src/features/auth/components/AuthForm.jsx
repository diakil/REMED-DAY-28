import FormInput from '../../../components/common/FormInput'
import AppButton from '../../../components/common/AppButton'
import Loader from '../../../components/common/Loader'
import AlertMessage from '../../../components/common/AlertMessage'

function AuthForm({
  title,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  error,
  submitLabel,
}) {
  return (
    <div className="card shadow-sm mx-auto auth-card">
      <div className="card-body p-4">
        <h1 className="h4 mb-3">{title}</h1>
        <AlertMessage message={error} />
        <form onSubmit={onSubmit}>
          <FormInput
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={onEmailChange}
            placeholder="contoh: eve.holt@reqres.in"
            required
          />
          <FormInput
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
            placeholder="minimal 6 karakter"
            required
          />
          <div className="d-grid">
            <AppButton type="submit" disabled={loading}>
              {loading ? <Loader text="Memproses..." /> : submitLabel}
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
