import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "1P410 is an independent studio creating focused apps for quantitative practice, Scripture reading, and everyday household life.";

export const metadata: Metadata = {
  // resolves the icon and share-card paths to absolute URLs
  metadataBase: new URL("https://1p410.net"),
  title: "1P410 Technologies",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "1P410 Technologies",
    title: "1P410 Technologies",
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "1P410 Technologies",
    description: DESCRIPTION,
  },
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
      </body>
    </html>
  );
}
