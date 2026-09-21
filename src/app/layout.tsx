import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1P410 Technologies",
  description:
    "1P410 is an independent studio creating focused apps for quantitative practice, Scripture reading, and everyday household life.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      {/* extensions (password managers, grammar checkers) mutate body attrs before hydration */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-ink text-bone"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
