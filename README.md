# React Reqres Mini Project

Aplikasi frontend React untuk autentikasi dan manajemen user menggunakan API publik Reqres.in.

## Fitur Utama

- Register dan Login dengan handling sukses dan gagal; otomatis fallback ke mock auth jika key Reqres free-tier tidak mengizinkan endpoint write.
- Protected routes untuk halaman `/users` dan `/users/:id`.
- Dashboard daftar user dengan pagination.
- Halaman detail user berdasarkan ID.
- UI responsif menggunakan Bootstrap 5.

## Tech Stack & Library

- React 19
- Vite
- React Router DOM 6
- Axios
- Bootstrap 5
- ESLint

## Endpoint Reqres yang Digunakan

- `POST /api/register`
- `POST /api/login`
- `GET /api/users?page={page}`
- `GET /api/users/{id}`

Base URL default: `https://reqres.in`

## Struktur Folder Inti

```text
src/
  components/
  features/
    auth/
    users/
  layouts/
  routes/
  services/
```

## Cara Menjalankan Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Jalankan mode development:

   ```bash
   npm run dev
   ```

3. Build production:

   ```bash
   npm run build
   ```

4. Lint:

   ```bash
   npm run lint
   ```

## Environment Variable

Buat file `.env` dari `.env.example`, lalu isi API key Reqres:

```env
VITE_API_BASE_URL=https://reqres.in
VITE_REQRES_API_KEY=your_reqres_api_key_here
```

Ambil API key dari [Reqres API Keys](https://app.reqres.in/api-keys).

## Catatan Testing Cepat Reqres

- Login sukses:
  - email: `eve.holt@reqres.in`
  - password: `cityslicka`
- Register sukses:
  - email: `eve.holt@reqres.in`
  - password: `pistol`

## Catatan Free Tier Reqres

Pada workspace free Reqres, API key bisa bersifat read-only sehingga endpoint write seperti `/api/register` dan `/api/login` dapat mengembalikan `403 invalid_api_key`.
Aplikasi ini menyediakan fallback mock auth otomatis agar flow mini project tetap dapat didemokan tanpa upgrade plan.

## Link Repository

Tambahkan URL repository kamu di bagian ini setelah push ke remote.
