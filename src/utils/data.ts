import librariesData from '@/data/libraries.json';
import newsItemsData from '@/data/news.json';
import faqsData from '@/data/faqs.json';

export interface Library {
  name: string;
  slug: string;
  description: string;
}

export interface NewsItem {
  date: string;
  title: string;
  summary: string;
  link: string; // External link
  tag: string[] | null; // Optional array of slugs for linking to library articles
}

export interface Faq {
  question: string;
  answerPreview: string;
}

// Typed data
export const libraries = librariesData as Library[];

// Sort news items by date descending (latest first)
const sortedNewsItems = (newsItemsData as NewsItem[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const newsItems = sortedNewsItems;

export const faqs = faqsData as Faq[];

// Helper functions
export function getLibraryBySlug(slug: string): Library | undefined {
  return libraries.find(lib => lib.slug === slug);
}

export function getFaqByQuestion(question: string): Faq | undefined {
  return faqs.find(faq => faq.question === question);
}

export function getAllLibrarySlugs(): string[] {
  return libraries.map(lib => lib.slug);
}

export function getAllFaqQuestions(): string[] {
  return faqs.map(faq => faq.question);
} 