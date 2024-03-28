import MainLayout from "@/components/mainLayout/MainLayout";
import PageTitle from "@/components/mainPage/PageTitle";
import Review from "@/components/mainPage/Review";

export default async function Home() {
  return (
    <MainLayout>
      <div className="flex w-full max-w-7xl mx-auto flex-col gap-12 text-moon-14 pb-10">
        <PageTitle />
        <Review />
      </div>
    </MainLayout>
  );
}
