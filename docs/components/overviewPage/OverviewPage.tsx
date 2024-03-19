import { mergeClassnames } from "@heathmont/moon-base-tw";
import MainLayout from "../mainLayout/MainLayout";
import { PageHeadComponent } from "../PageHeadComponent";
import type OverviewPageProps from "./types/OverviewPageProps";

const OverviewPage = (props: OverviewPageProps) => {
  const { title, description, children, className } = props;
  return (
    <MainLayout>
      <div
        className={mergeClassnames(
          "flex w-full max-w-7xl mx-auto flex-col gap-12 text-moon-14 pb-10",
          className,
        )}
      >
        <PageHeadComponent title={title} description={description} />
        {children}
      </div>
    </MainLayout>
  );
};

export default OverviewPage;
