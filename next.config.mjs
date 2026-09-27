/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // static export for GitHub Pages at https://girishlade111.github.io/le-lo-saa-s-landing/
  // remove output+basePath for root-domain / Vercel / Netlify deploys
  output: 'export',
  basePath: '/le-lo-saa-s-landing',
}

export default nextConfig
