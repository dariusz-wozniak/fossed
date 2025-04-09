import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { getAllLibrarySlugs, getLibraryBySlug, newsItems, NewsItem } from '@/utils/data';
import Link from 'next/link';
import { ComponentProps } from 'react';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';

// Set rendering mode to dynamic
export const dynamic = 'force-dynamic';

// Define the path to the content directory
const contentDirectory = path.join(process.cwd(), 'content', 'libraries');

// Custom components for MDX rendering
const components = {
  // Override the default anchor tag to open links in new tabs
  a: (props: ComponentProps<'a'>) => <a {...props} target="_blank" rel="noopener noreferrer" />,
};

// Function to get library content by slug
async function getLibraryContent(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(fileContents); // Parse frontmatter and content
    return { content, frontmatter: data };
  } catch (error) {
    console.error(`Error reading library content for ${slug}:`, error);
    return null; // Return null if file doesn't exist or error occurs
  }
}

// Generate static paths for all libraries
export async function generateStaticParams() {
  const slugs = getAllLibrarySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Define Props type according to Next.js 15 requirements
type Props = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate metadata from frontmatter and library data
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Get slug directly from params - need to await it now
  const { slug } = await params;
  
  const libraryData = await getLibraryContent(slug);
  const library = getLibraryBySlug(slug);
  
  if (!libraryData && !library) {
    return { title: 'Library Not Found' };
  }

  const frontmatter = libraryData?.frontmatter;
  
  return {
    title: frontmatter?.title || library?.name || 'Library Article',
    description: frontmatter?.description || library?.description || 'Details about the library license.',
  };
}

// The page component
export default async function LibraryPage({ params }: Props) {
  // Get slug directly from params - need to await it now
  const { slug } = await params;
  
  const libraryData = await getLibraryContent(slug);
  const library = getLibraryBySlug(slug);

  if (!libraryData && !library) {
    notFound(); // Show 404 if MDX file doesn't exist or error reading
  }

  const { content, frontmatter } = libraryData || { content: '', frontmatter: {} };

  // Filter news items where the 'tag' array includes the current library slug
  const relatedNews = newsItems.filter((item: NewsItem) => 
    item.tag && item.tag.includes(slug)
  );

  // Compile MDX content on the server
  const { content: compiledContent } = await compileMDX({
    source: content || '',
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components, // Pass our custom components
  });

  return (
    <article className="prose dark:prose-invert max-w-none">
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 block">
        &larr; Back to main site
      </Link>
      {/* Display title from frontmatter or library data */}
      <h1 className="mb-4 text-4xl font-extrabold leading-tight lg:text-5xl">
        {frontmatter.title || library?.name || 'Library Article'}
      </h1>
      {compiledContent}

      {/* Related News Section */}
      {relatedNews.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6">Related News</h2>
          <ul className="space-y-6">
            {relatedNews.map((item, index) => (
              <li key={index} className="pb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">{item.date}</span>
                <h3 className="text-xl font-medium mb-1">
                  <a 
                    href={item.link}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1.5 text-gray-400 dark:text-gray-500">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
