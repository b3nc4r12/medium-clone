/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    sanity_project_id: process.env.SANITY_PROJECT_ID,
    sanity_dataset: process.env.SANITY_DATASET
  }
}

module.exports = nextConfig