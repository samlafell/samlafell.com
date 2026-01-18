import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam LaFell | Data Engineer",
  description: "Data Engineer and Solutions Architect building robust data systems and scalable pipelines.",
  keywords: ["Data Engineer", "Solutions Architect", "Snowflake", "Python", "dbt", "Airflow", "AWS"],
  authors: [{ name: "Sam LaFell" }],
  openGraph: {
    title: "Sam LaFell | Data Engineer",
    description: "Data Engineer and Solutions Architect building robust data systems and scalable pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam LaFell | Data Engineer",
    description: "Data Engineer and Solutions Architect building robust data systems and scalable pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-text-primary leading-relaxed selection:bg-accent selection:text-background min-h-screen w-full overflow-x-hidden`}
      >
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
