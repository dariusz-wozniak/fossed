import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Add 'md' and 'mdx'
  images: {
    unoptimized: true
  },
  output: 'export',
  // Your existing config here
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react"
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig); 