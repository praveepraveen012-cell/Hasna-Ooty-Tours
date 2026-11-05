/**
 * Hasna Ooty Tours - Public Asset URL Resolver
 * Ensures asset paths resolve accurately across local development and GitHub Pages.
 */
export function assetUrl(path) {
  if (!path) return '';

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  return `${base}${cleanPath}`;
}

export default assetUrl;
