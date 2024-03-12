import MainLayout from "@/components/mainLayout/MainLayout";
import PageTitle from "@/components/mainPage/PageTitle";
import Review from "@/components/mainPage/Review";
/* import Vision from "@/components/mainPage/Vision"; */

export default async function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-12">
        <PageTitle />
        <Review />
        {/* <Vision /> */}
      </div>
    </MainLayout>
  );
}
