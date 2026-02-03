import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Landing/footer";
import Header from "@/components/Landing/header";
import Chatbot from "@/components/Chatbot";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Health Screening App",
  description: "Early screening tool for anemia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 bg-background text-foreground">
              {children}
            </main>

            <Footer />
          </div>

          {/* 🔹 Floating Chatbot (GLOBAL) */}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
