import { MainLayout } from "@/components/MainLayout";
import PageTitle from "@/components/mainPage/PageTitle";
import Vision from "@/components/mainPage/Vision";

export default async function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12">
        <PageTitle />
        <Vision />
      </div>
    </MainLayout>
  );
}
