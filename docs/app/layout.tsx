import Head from "next/head";
import { SearchProvider } from "@/components/search/SearchProvider";
import { useSearchActions } from "@/components/search/useSearchActions";
import { cookies } from "next/headers";
import "./globals.css";
import { mergeClassnames } from "@heathmont/moon-base-tw";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  const [actions, themeCookie, dirCookie] = await Promise.all([
    useSearchActions(),
    cookies().get("theme"),
    cookies().get("dir"),
  ]);

  const defaultTheme = themeCookie?.value || "light-theme";
  const defaultLayoutDir = dirCookie?.value || "ltr";

  return (
    <html lang="en" dir={defaultLayoutDir} className="scroll-pt-20">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <GoogleAnalytics />
      <body
        className={mergeClassnames(
          defaultTheme,
          "bg-primary text-primary font-primary",
        )}
      >
        <SearchProvider actions={actions}>
          <div id="__next">{children}</div>
        </SearchProvider>
      </body>
    </html>
  );
}
