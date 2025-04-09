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
