import type { Metadata } from "next";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({subsets : ['latin']})

export const metadata = constructMetadata()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </Providers>
        </main>

        <Toaster position="top-center" richColors/>
      </body>
    </html>
  );
}
