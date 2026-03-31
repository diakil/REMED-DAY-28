import axios from 'axios'

// Normalize env var to avoid common copy/paste issues (spaces/quotes).
let apiKey = import.meta.env.VITE_REQRES_API_KEY || ''
apiKey = apiKey.trim().replace(/^['"]|['"]$/g, '')

if (import.meta.env.DEV) {
  // Avoid printing full key; log only whether it's present + length.
  // This helps debugging invalid_api_key without leaking secrets.
  console.info('[Reqres] x-api-key present:', Boolean(apiKey), 'length:', apiKey.length)
}

const apiClient = axios.create({
  baseURL: 'https://reqres.in',
  headers: {
    'Content-Type': 'application/json',
    ...(apiKey ? { 'x-api-key': apiKey } : {}),
  },
})

export default apiClient
