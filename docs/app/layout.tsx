import { SearchProvider } from "@/components/search/SearchProvider";
import { RtlProvider } from "@/components/settings/utils/RTLProvider";
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
    <html lang="en" dir="ltr">
      <SearchProvider actions={actions}>
        <RtlProvider>
          <body className="theme-moon-light bg-goku">{children}</body>
        </RtlProvider>
      </SearchProvider>
    </html>
  );
}
