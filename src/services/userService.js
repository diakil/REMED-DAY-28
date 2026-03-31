import apiClient from './apiClient'

const MOCK_USERS = [
  { id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg' },
  { id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg' },
  { id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg' },
  { id: 4, email: 'eve.holt@reqres.in', first_name: 'Eve', last_name: 'Holt', avatar: 'https://reqres.in/img/faces/4-image.jpg' },
  { id: 5, email: 'charles.morris@reqres.in', first_name: 'Charles', last_name: 'Morris', avatar: 'https://reqres.in/img/faces/5-image.jpg' },
  { id: 6, email: 'tracey.ramos@reqres.in', first_name: 'Tracey', last_name: 'Ramos', avatar: 'https://reqres.in/img/faces/6-image.jpg' },
]

const PAGE_SIZE = 3

function shouldFallbackToMock(error) {
  const status = error?.response?.status
  const code = error?.response?.data?.error
  return status === 403 || code === 'invalid_api_key' || code === 'missing_api_key'
}

function wait(ms = 250) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getUsers(page = 1) {
  try {
    const response = await apiClient.get(`/api/users?page=${page}`)
    return response.data
  } catch (error) {
    if (!shouldFallbackToMock(error)) throw error

    await wait()
    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    const pagedUsers = MOCK_USERS.slice(start, end)

    return {
      page,
      per_page: PAGE_SIZE,
      total: MOCK_USERS.length,
      total_pages: Math.ceil(MOCK_USERS.length / PAGE_SIZE),
      data: pagedUsers,
      source: 'mock',
    }
  }
}

export async function getUserById(userId) {
  try {
    const response = await apiClient.get(`/api/users/${userId}`)
    return response.data
  } catch (error) {
    if (!shouldFallbackToMock(error)) throw error

    await wait()
    const found = MOCK_USERS.find((user) => user.id === Number(userId))
    if (!found) {
      const notFound = new Error('User tidak ditemukan.')
      notFound.response = { status: 404, data: { error: 'user not found' } }
      throw notFound
    }

    return { data: found, source: 'mock' }
  }
}
