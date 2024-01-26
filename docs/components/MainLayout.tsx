import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ProductSidebar from "./productSidebar/ProductSidebar";
import { Header } from "./header/Header";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";

interface MainLayoutProps {
  children: ReactNode;
  isMockup?: boolean;
  componentName?: string;
  contentSidebar?: string[];
}

export const MainLayout = ({
  children,
  isMockup = false,
  componentName,
  contentSidebar,
}: MainLayoutProps) => {
  return isMockup ? (
    children
  ) : (
    <>
      <Header>
        <Breadcrumbs />
      </Header>
      <Sidebar />
      <main className="min-h-screen ms-80 me-0 lg:me-72 bg-goku text-bulma flex-1 flex flex-col rounded-ss-3xl px-5 xl:px-20 2xl:px-32 pt-12">
        {children}
      </main>
      <Footer />
      {componentName && contentSidebar && (
        <ProductSidebar name={componentName} contents={contentSidebar} />
      )}
    </>
  );
};
