export function createAvatarFallback(firstName = '', lastName = '') {
  const initials = `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase() || 'U'
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='#e9ecef'/>
    <circle cx='150' cy='120' r='48' fill='#ced4da'/>
    <rect x='72' y='184' width='156' height='72' rx='36' fill='#ced4da'/>
    <text x='150' y='160' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' fill='#495057'>${initials}</text>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
