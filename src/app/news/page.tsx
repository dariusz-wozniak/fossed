import NewsList from '@/components/NewsList';
import type { Metadata } from 'next';

// Static export cannot serve a runtime redirect, so /news renders page 1 directly.
export const metadata: Metadata = {
  title: 'Latest News - Page 1',
  description: 'Page 1 of updates and articles related to .NET library licensing changes.',
};

export default function NewsRootPage() {
  return <NewsList currentPage={1} />;
}
