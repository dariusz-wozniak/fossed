import NewsList, { getTotalNewsPages } from '@/components/NewsList';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Generate static paths for each page number
export async function generateStaticParams() {
  const totalPages = getTotalNewsPages();

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

  // Redirects are not suitable here, show 404 for pages beyond the last one
  if (currentPage > getTotalNewsPages()) {
    notFound();
  }

  return <NewsList currentPage={currentPage} />;
}
