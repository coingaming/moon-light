import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
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
      <aside className="hidden fixed h-screen lg:flex lg:flex-shrink-0 flex-col">
        <Sidebar />
      </aside>
      <main className="box-content min-h-screen max-w-6xl lg:mx-72 bg-goku text-bulma flex-1 flex flex-col p-5 lg:p-8">
        {children}
      </main>
      <Footer />
      {componentName && contentSidebar && (
        <ProductSidebar name={componentName} contents={contentSidebar} />
      )}
      {subtitles && <OverviewSidebar subtitles={subtitles} />}
    </>
  );
};
