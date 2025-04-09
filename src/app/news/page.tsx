import { redirect } from 'next/navigation';

// This page only exists to redirect /news to the first page of pagination
export default function NewsRootPage() {
  redirect('/news/page/1');
  // Note: redirect() must be called outside of JSX
  // Return null or an empty fragment as the redirect happens before render
  // return null; 
} 