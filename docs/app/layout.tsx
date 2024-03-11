import Head from "next/head";
import { SearchProvider } from "@/components/search/SearchProvider";
import { useSearchActions } from "@/components/search/useSearchActions";
import { cookies } from "next/headers";
import "./globals.css";
import "./themes.css";
import { mergeClassnames } from "@heathmont/moon-base-tw";

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
  const defTheme = await cookies().get("theme")?.value ?? "theme-moon-light";
  const dirLayout = await cookies().get("dir")?.value ?? "ltr";
  return (
    <html lang="en" dir={dirLayout} className="scroll-pt-20">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={mergeClassnames(defTheme, "bg-goku")}>
        <SearchProvider actions={actions}>
          <div id="__next">{children}</div>
        </SearchProvider>
      </body>
    </html>
  );
}
