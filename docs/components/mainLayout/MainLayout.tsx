import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ProductSidebar from "../productSidebar/ProductSidebar";
import { Header } from "../header/Header";
import OverviewSidebar from "../overviewSidebar/OverviewSidebar";
import type MainLayoutProps from "./types/MainLayoutProps";

const MainLayout = ({
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
      <Header />
      <aside className="hidden lg:block lg:fixed h-[calc(100vh-72px)]">
        <Sidebar />
      </aside>
      <main className="box-content min-h-screen max-w-6xl lg:ms-72 xl:mx-72 bg-goku text-bulma flex-1 flex flex-col p-5 lg:p-8">
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

export default MainLayout;
