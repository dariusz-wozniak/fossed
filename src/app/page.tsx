import Image from "next/image";
import LibraryTile from "@/components/LibraryTile";
import Link from "next/link";

// Import data and types from the utils
import { libraries, newsItems, faqs, summary } from "@/utils/data";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 pt-4 pb-16 gap-8 sm:px-8 md:px-20 md:pt-10 md:pb-20 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 sm:gap-[32px] row-start-2 items-stretch w-full max-w-7xl">
        <div className="flex justify-start w-full">
          <Image
            src="/fossed/fossed.png"
            alt="Fossed logo"
            width={320}
            height={80}
            className="max-w-[240px] sm:max-w-[280px] md:max-w-[320px]"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">Navigating .NET library licensing changes.</h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-12 text-gray-600 dark:text-gray-400">
          Recent .NET ecosystem licensing changes impact several libraries, requiring projects to either pay for a license or find an alternative. Welcome to the FOSSED, where we will help you navigate the changes and find free open-source alternatives.
        </p>

        {/* Library Tiles Section */}
        <section className="mb-8 sm:mb-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Affected Libraries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {libraries.map((lib) => (
              <LibraryTile key={lib.slug} {...lib} />
            ))}
          </div>
        </section>

        {/* Summary Table Section */}
        <section className="mb-8 sm:mb-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Summary</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0 max-w-[100vw]">
            <div className="inline-block min-w-full align-middle px-2 sm:px-4">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-collapse table-fixed">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="w-[20%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-r border-gray-200 dark:border-gray-700">Framework</th>
                    <th scope="col" className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-r border-gray-200 dark:border-gray-700">Old License</th>
                    <th scope="col" className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-r border-gray-200 dark:border-gray-700">Last Free Version</th>
                    <th scope="col" className="w-[35%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-r border-gray-200 dark:border-gray-700">Alternatives</th>
                    <th scope="col" className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Website</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {summary.map((item) => (
                    <tr key={item.slug} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="w-[20%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm font-medium border-r border-gray-200 dark:border-gray-700 break-words">
                        <Link href={`/library/${item.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                          {item.framework}
                        </Link>
                      </td>
                      <td className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 break-words">{item.oldLicense}</td>
                      <td className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 break-words">{item.lastFreeVersion}</td>
                      <td className="w-[35%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                        <ul className="list-disc pl-3 sm:pl-4">
                          {item.alternatives.map((alt, index) => (
                            <li key={index} className="mb-1 last:mb-0 break-words">{alt}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="w-[15%] px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 break-words">
                        <a 
                          href={item.websiteUrl} 
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {item.websiteText}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 inline-block ml-1 text-gray-400 dark:text-gray-500">
                            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-8 sm:mb-16 w-full">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Latest News</h2>
            <Link href="/news" className="text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm">
              View All News &rarr;
            </Link>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {newsItems.slice(0, 3).map((item, index) => (
              <li key={index} className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 block mb-1">{item.date}</span>
                <h3 className="text-base sm:text-xl font-medium mb-1">
                  <a 
                    href={item.link} 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 inline-block ml-1 text-gray-400 dark:text-gray-500">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.19a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </h3>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {item.summary}
                  {/* Render tags inline after summary if they exist */}
                  {item.tag && item.tag.length > 0 && (
                    <div className="mt-1">
                      {item.tag.map((tagSlug) => (
                        <Link 
                          key={tagSlug} 
                          href={`/library/${tagSlug}`} 
                          className="inline-block bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300 text-xs sm:text-sm px-2 py-0.5 rounded mr-1 mb-1 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
                        >
                            {tagSlug}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section (Now directly below News) */}
        <section className="mb-8 sm:mb-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">FAQ</h2>
          <ul className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <li key={index} className="pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{faq.answerPreview}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-3 sm:gap-[24px] flex-wrap items-center justify-center text-sm">
        {/* Remove Next.js/Vercel related footer links */}
      </footer>
    </div>
  );
}
