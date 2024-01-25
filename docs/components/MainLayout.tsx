import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import Settings from "@/components/settings/Settings";
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
      <main className="box-content min-h-screen max-w-6xl ms-72 lg:me-72 bg-goku text-bulma flex flex-col gap-12 px-5 xl:px-12 pt-12 xl:pb-52">
        {children}
      </main>
      {componentName && contentSidebar && (
        <ProductSidebar name={componentName} contents={contentSidebar} />
      )}
      <Settings />
      <Footer />
    </>
  );
};
