import { mergeClassnames } from "@heathmont/moon-core-tw";
import { MainLayout } from "./MainLayout";
import { PageHeadComponent } from "./PageHeadComponent";

interface Title {
  subtitle: string;
  id: string;
}

interface OverviewPageProps {
  description?: any;
  title: string;
  subtitles?: Title[];
  children?: React.ReactNode;
  className?: string;
}

const OverviewPage = (props: OverviewPageProps) => {
  const { title, description, subtitles, children, className } = props;
  return (
    <MainLayout subtitles={subtitles}>
      <div
        className={mergeClassnames(
          "flex flex-col gap-6 text-moon-14 pb-20",
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
