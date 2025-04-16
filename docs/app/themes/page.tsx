import MainLayout from "@/components/mainLayout/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import MainColors from "./MainColors";
import SupportiveColors from "./SupportiveColors";

const DESCRIPTION =
  "Moon Design System is decentralized and intended to support multiple products. The use of different-color naming conventions and numbers makes maintenance more difficult. We decided to give each of our colors a distinct name, adopting the Dragon Ball Z approach. Each color name is assigned for a specific purpose, and the values vary according to the product. Please do not use hex values; they will not change if you need theme support.";

const ThemesPage = () => (
  <MainLayout>
    <div className="flex w-full max-w-7xl mx-auto flex-col gap-space-48 text-body-300 pb-space-40">
      <PageHeadComponent
        title="Themes"
        packageName="@heathmont/moon-themes-tw"
        description={DESCRIPTION}
      />
      <MainColors />
      <SupportiveColors />
    </div>
  </MainLayout>
);

export default ThemesPage;
