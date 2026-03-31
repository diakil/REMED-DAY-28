import apiClient from './apiClient'

const DEMO_LOGIN = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
}

const DEMO_REGISTER = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
}

function shouldFallbackToMock(error) {
  const status = error?.response?.status
  const code = error?.response?.data?.error
  return status === 403 || code === 'invalid_api_key' || code === 'missing_api_key'
}

function createMockToken(email) {
  return `demo_token_${btoa(email).slice(0, 10)}`
}

function wait(ms = 350) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function login(payload) {
  try {
    const response = await apiClient.post('/api/login', payload)
    return response.data
  } catch (error) {
    if (!shouldFallbackToMock(error)) throw error

    await wait()

    if (payload?.email === DEMO_LOGIN.email && payload?.password === DEMO_LOGIN.password) {
      return { token: createMockToken(payload.email), source: 'mock' }
    }

    const failed = new Error('user not found')
    failed.response = { data: { error: 'user not found' } }
    throw failed
  }
}

export async function register(payload) {
  try {
    const response = await apiClient.post('/api/register', payload)
    return response.data
  } catch (error) {
    if (!shouldFallbackToMock(error)) throw error

    await wait()

    if (payload?.email === DEMO_REGISTER.email && payload?.password === DEMO_REGISTER.password) {
      return { id: '4', token: createMockToken(payload.email), source: 'mock' }
    }

    const failed = new Error('missing password')
    failed.response = { data: { error: 'missing password' } }
    throw failed
  }
}
