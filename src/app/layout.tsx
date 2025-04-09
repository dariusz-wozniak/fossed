import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header"; // Removed Header import
import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider"; // Removed ThemeProvider import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOSSED: Navigating .NET library licensing changes",
  description: "Tracking the changing landscape   of .NET library licenses.",
  icons: {
    icon: [
      { url: '/fossed/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fossed/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/fossed/favicon/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'android-chrome-192x192', url: '/fossed/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/fossed/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { rel: 'manifest', url: '/fossed/favicon/site.webmanifest' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>
        {/* <ThemeProvider // Removed ThemeProvider wrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {/* <Header /> */} {/* Removed Header component */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
