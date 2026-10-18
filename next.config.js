/** @type {import('next').NextConfig} */
// Static export for GitHub Pages (https://kamal81684.github.io): no server, plain files in out/.
module.exports = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
};
