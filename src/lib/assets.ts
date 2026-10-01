/** Resolve public folder paths for GitHub Pages base URL. */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}
