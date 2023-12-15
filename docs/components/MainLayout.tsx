import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import Settings from "@/components/settings/Settings";
import ProductSidebar from "./productSidebar/ProductSidebar";
import { Header } from "./header/Header";
import Link from "next/link";
import { Breadcrumb } from "@heathmont/moon-core-tw";
// import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

interface MainLayoutProps {
  children: ReactNode;
  isMockup?: boolean;
  componentName?: string;
}

export const MainLayout = ({
  children,
  isMockup = false,
  componentName,
}: MainLayoutProps) => {
  const breadcrumbs = [
    <Link href="/">Home</Link>,
    <span>{componentName}</span>,
  ];

  return isMockup ? (
    children
  ) : (
    <>
      <Header>
        {/* <Breadcrumbs /> */}
        {componentName && <Breadcrumb breadcrumbs={breadcrumbs} divider="/" />}
      </Header>
      <Sidebar />
      <main className="min-h-screen ms-80 me-0 lg:me-72 bg-goku flex-1 flex flex-col px-5 xl:px-20 2xl:px-32 pt-12 xl:pb-52">
        {children}
      </main>
      {componentName && <ProductSidebar name={componentName} />}
      <Settings />
      <Footer />
    </>
  );
};
