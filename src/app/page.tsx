import Image from "next/image";
import LibraryTile from "@/components/LibraryTile";
import Link from "next/link";

// Import data and types from the utils
import { libraries, newsItems, faqs } from "@/utils/data";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pt-4 pb-20 gap-16 sm:px-20 sm:pt-10 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-stretch">
        <Image
          src="/fossed.png"
          alt="Fossed logo"
          width={400}
          height={100}
          priority
        />
        <h1 className="text-4xl font-bold mb-8">Navigating .NET library licensing changes.</h1>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-400">
          Recent .NET ecosystem licensing changes impact several libraries, requiring projects to either pay for a license or find an alternative. Welcome to the FOSSED, where we will help you navigate the changes and find free open-source alternatives.
        </p>

        {/* Library Tiles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Affected Libraries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraries.map((lib) => (
              <LibraryTile key={lib.slug} {...lib} />
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Latest News</h2>
            <a href="/news" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View All News &rarr;</a>
          </div>
          <ul className="space-y-4">
            {newsItems.slice(0, 3).map((item, index) => (
              <li key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">{item.date}</span>
                <h3 className="text-xl font-medium mb-1">
                  <a 
                    href={item.link} 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1 text-gray-400 dark:text-gray-500">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <div className="text-gray-600 dark:text-gray-300">
                  {item.summary}
                  {/* Render tags inline after summary if they exist */}
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
        </section>

        {/* FAQ Section (Now directly below News) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">FAQ</h2>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <h3 className="text-lg font-medium mb-1">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answerPreview}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Remove Next.js/Vercel related footer links */}
      </footer>
    </div>
  );
}
