import Link from 'next/link';
import { newsItems } from '@/utils/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const ITEMS_PER_PAGE = 10;

// Generate static paths for each page number
export async function generateStaticParams() {
  const totalItems = newsItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Handle case with no items gracefully
  if (totalPages === 0) {
    return [{ pageNumber: '1' }]; // Generate page 1 even if empty
  }

  return Array.from({ length: totalPages }, (_, i) => ({
    pageNumber: (i + 1).toString(),
  }));
}

// Generate metadata for each page
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = Number(pageNumber) || 1;
  return {
    title: `Latest News - Page ${page}`,
    description: `Page ${page} of updates and articles related to .NET library licensing changes.`,
  };
}

// Define Props type for the dynamic route
type Props = {
  params: Promise<{ pageNumber: string }>;
  // searchParams are not used in static generation for path params
}

export default async function NewsPageNumber({ params }: Props) {
  const { pageNumber } = await params;
  const currentPage = Number(pageNumber);

  // Validate page number
  if (isNaN(currentPage) || currentPage < 1) {
    notFound(); // Show 404 for invalid page numbers like 0 or non-numeric
  }

  const totalItems = newsItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Handle cases where page number is out of bounds after validation
  // Redirects are not suitable here, show 404 for pages beyond the last one
  if (totalItems > 0 && currentPage > totalPages) {
     notFound(); 
  }
  // Handle case where page 1 is requested but there are no items (allowed by generateStaticParams)
  if (totalItems === 0 && currentPage === 1) {
      // Render the page structure but indicate no items
  } else if (totalItems === 0) {
      // Should not happen if generateStaticParams is correct, but safeguard
      notFound();
  }


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  // Slice needs to handle the case where totalItems is 0
  const currentNewsItems = totalItems > 0 ? newsItems.slice(startIndex, endIndex) : [];

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest News <span className="text-2xl text-gray-500 dark:text-gray-400">- Page {currentPage}</span></h1>

      {currentNewsItems.length > 0 ? (
        <ul className="space-y-8">
          {currentNewsItems.map((item, index) => (
            <li key={startIndex + index} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">{item.date}</span>
              <h2 className="text-2xl font-semibold mb-2">
                <a 
                  href={item.link} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block ml-1.5 text-gray-400 dark:text-gray-500">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                {item.summary}
                {item.tag && item.tag.length > 0 && (
                  <span className="ml-2">
                    {item.tag.map((tagSlug) => (
                      <Link 
                        key={tagSlug} 
                        href={`/library/${tagSlug}`} 
                        className="inline-block bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300 text-sm px-2 py-1 rounded mr-1 mb-1 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
                      >
                          {tagSlug}
                      </Link>
                    ))}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
         <p className="text-center text-gray-500 dark:text-gray-400 py-10">No news items available.</p>
      )}


      {/* Pagination Controls - Update links */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-8">
          {hasPreviousPage ? (
            <Link 
              href={`/news/page/${currentPage - 1}`}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              &larr; Previous
            </Link>
          ) : (
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-gray-400 dark:text-gray-500 cursor-not-allowed">
              &larr; Previous
            </span>
          )}

          <span className="text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>

          {hasNextPage ? (
            <Link 
              href={`/news/page/${currentPage + 1}`}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Next &rarr;
            </Link>
          ) : (
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-gray-400 dark:text-gray-500 cursor-not-allowed">
              Next &rarr;
            </span>
          )}
        </div>
      )}
      
       <div className="mt-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          &larr; Back to main site
        </Link>
      </div>
    </div>
  );
} 