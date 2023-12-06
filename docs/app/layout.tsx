import Settings from "@/components/settings/Settings";
import { SearchProvider } from "@/components/search/SearchProvider";
import { RtlProvider } from "@/components/settings/utils/RTLProvider";
import { useSearchActions } from "@/components/search/useSearchActions";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
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
          <body className="theme-moon-light">
            <Sidebar />
            <main className="min-h-screen ms-80 bg-goku flex-1 flex flex-col rounded-ss-3xl px-5 xl:px-20 2xl:px-32 pt-12 xl:pb-52">
              {children}
            </main>
            <Settings />
            <Footer />
          </body>
        </RtlProvider>
      </SearchProvider>
    </html>
  );
}
