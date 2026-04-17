import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JC&L Proserve Inc. Portal",
  description: "JC&L Proserve Inc. Portal",
  icons: {
    icon: "/logo-monogram.png?v=2", // <-- Add ?v=2 to bust the cache
    apple: "/logo-monogram.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="min-h-screen w-full dark:bg-[#0f172a] bg-background relative flex flex-col">
            {/* Blue Radial Glow Background */}
            <div
              className="absolute inset-0 z-0 hidden dark:block pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
              }}
            />
            {/* Main Content wrapper */}
            <div className="relative z-10 flex flex-col flex-1">
              <Navbar />
              <main className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
                {children}
              </main>
            </div>
          </div>
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
