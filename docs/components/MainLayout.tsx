import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import Settings from "@/components/settings/Settings";
import ProductSidebar from "./productSidebar/ProductSidebar";
import { Header } from "./header/Header";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import OverviewSidebar from "./overviewSidebar/OverviewSidebar";

interface Title {
  subtitle: string;
  id: string;
}

interface MainLayoutProps {
  children: ReactNode;
  isMockup?: boolean;
  componentName?: string;
  contentSidebar?: string[];
  subtitles?: Title[];
  title?: string;
}

export const MainLayout = ({
  children,
  isMockup = false,
  componentName,
  contentSidebar,
  subtitles,
}: MainLayoutProps) => {
  return isMockup ? (
    children
  ) : (
    <>
      <Header>
        <Breadcrumbs />
      </Header>
      <Sidebar />
      <main className="min-h-screen ms-80 me-0 lg:me-72 bg-goku text-bulma flex-1 flex flex-col rounded-ss-3xl px-5 xl:px-20 2xl:px-32 pt-12 xl:pb-52">
        {children}
      </main>
      {componentName && contentSidebar && (
        <ProductSidebar name={componentName} contents={contentSidebar} />
      )}
      {subtitles && <OverviewSidebar subtitles={subtitles} />}
      <Settings />
      <Footer />
    </>
  );
};
