import { useCallback, useMemo, useState } from 'react'
import { login as loginService, register as registerService } from '../../../services/authService'
import AuthContext from './AuthContextObject'

const TOKEN_KEY = 'reqres_token'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY))

  const saveToken = useCallback((newToken) => {
    sessionStorage.setItem(TOKEN_KEY, newToken)
    setToken(newToken)
  }, [])

  const clearSession = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY)
    setToken(null)
  }, [])

  const login = useCallback(async (credentials) => {
    const data = await loginService(credentials)
    if (data?.token) saveToken(data.token)
    return data
  }, [saveToken])

  const register = useCallback(async (payload) => {
    const data = await registerService(payload)
    if (data?.token) saveToken(data.token)
    return data
  }, [saveToken])

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout: clearSession,
    }),
    [clearSession, login, register, token],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
