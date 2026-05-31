/** Resolve a public asset path for GitHub Pages base URL support. */
export function publicPath(path = '') {
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
