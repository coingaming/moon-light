import Head from "next/head";
import { SearchProvider } from "@/components/search/SearchProvider";
import { useSearchActions } from "@/components/search/useSearchActions";
import "./globals.css";
import "./themes.css";

export const metadata = {
  title: "Moon Design System",
  description:
    "Maintain the integrity of their user experience and optimize design and development resources.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const actions = await useSearchActions();
  return (
    <html lang="en" dir="ltr" className="scroll-pt-20">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="theme-moon-light bg-goku">
        <SearchProvider actions={actions}>
          <div id="__next">{children}</div>
        </SearchProvider>
      </body>
    </html>
  );
}
