/** Encode only the last path segment (handles spaces in filenames). */
function encodeLastSegment(path: string): string {
  const parts = path.split("/");
  let last = parts.pop();
  if (last) {
    try {
      last = decodeURIComponent(last);
    } catch {
      /* keep raw segment */
    }
    parts.push(encodeURIComponent(last));
  }
  return parts.join("/");
}

function normalizeBase(base: string): string {
  if (!base) return "/";
  let b = base.startsWith("/") ? base : `/${base}`;
  if (!b.endsWith("/")) b += "/";
  return b;
}

/** Resolve public folder paths for GitHub Pages base URL. */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, "");
  const videoBase = import.meta.env.VITE_VIDEO_BASE_URL?.replace(/\/$/, "");

  if (videoBase && normalized.startsWith("videos/")) {
    return `${videoBase}/${encodeLastSegment(normalized)}`;
  }

  const base = normalizeBase(import.meta.env.BASE_URL);
  if (normalized.startsWith("videos/")) {
    return `${base}${encodeLastSegment(normalized)}`;
  }

  return `${base}${normalized}`;
}
