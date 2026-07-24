import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Üst dizinde başka bir lockfile olsa bile trace kökünü bu projeye sabitle
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
