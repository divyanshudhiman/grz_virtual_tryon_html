import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function normalizeBase(raw: string | undefined): string {
  const value = raw?.trim() || "/";
  const withSlash = value.startsWith("/") ? value : `/${value}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

const base = normalizeBase(process.env.VITE_BASE_PATH);

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  publicDir: "public",
});
