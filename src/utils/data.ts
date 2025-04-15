import librariesData from '@/data/libraries.json';
import newsItemsData from '@/data/news.json';
import faqsData from '@/data/faqs.json';
import summaryData from '@/data/summary.json';

export interface Library {
  name: string;
  slug: string;
  description: string;
  category?: string;
  licenseInfo?: string;
  alternatives?: Array<string | { name: string }>;
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

export interface SummaryItem {
  framework: string;
  slug: string;
  oldLicense: string;
  newLicense: string;
  pricing: string;
  lastFreeVersion: string;
  alternatives: string;
}

// Typed data
export const libraries = librariesData as Library[];

// Sort news items by date descending (latest first)
const sortedNewsItems = (newsItemsData as NewsItem[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const newsItems = sortedNewsItems;

export const faqs = faqsData as Faq[];

export const summary = summaryData as SummaryItem[];

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