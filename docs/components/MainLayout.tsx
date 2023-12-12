import { ReactNode } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import Settings from "@/components/settings/Settings";
interface IMainLayout {
    children: ReactNode; isMockup?: boolean
}

export const MainLayout = (
    { children, isMockup = false }: IMainLayout
) => {
    if (isMockup) return children;
    return <>
        <Sidebar />
        <main className="min-h-screen ms-80 bg-goku flex-1 flex flex-col rounded-ss-3xl px-5 xl:px-20 2xl:px-32 pt-12 xl:pb-52">
            {children}
        </main>
        <Settings />
        <Footer />
    </>
}