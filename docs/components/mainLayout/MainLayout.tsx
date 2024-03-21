import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ProductSidebar from "../productSidebar/ProductSidebar";
import { Header } from "../header/Header";
import type MainLayoutProps from "./types/MainLayoutProps";

const MainLayout = ({
  children,
  isMockup = false,
  componentName,
  contentSidebar,
}: MainLayoutProps) => {
  return isMockup ? (
    children
  ) : (
    <>
      <Header />
      <aside className="hidden lg:block lg:fixed h-[calc(100vh-72px)]">
        <Sidebar />
      </aside>
      <main className="box-content min-h-screen lg:ms-72 xl:me-64 bg-goku text-bulma flex-1 flex flex-col p-5 lg:p-6">
        {children}
      </main>
      <Footer />
      {componentName && contentSidebar && (
        <ProductSidebar name={componentName} contents={contentSidebar} />
      )}
    </>
  );
};

export default MainLayout;
