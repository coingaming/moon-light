import MainLayout from "@/components/mainLayout/MainLayout";
import Contributors from "@/components/mainPage/contributors/Contributors";
import PageTitle from "@/components/mainPage/PageTitle";
import Review from "@/components/mainPage/Review";

export default async function Home() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-7xl mx-auto flex-col gap-space-48 text-body-300 pb-space-40">
        <PageTitle />
        <Review />
        <Contributors />
      </div>
    </MainLayout>
  );
}
