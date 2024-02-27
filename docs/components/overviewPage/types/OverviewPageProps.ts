import type Title from "./Title";

type OverviewPageProps = {
  description?: any;
  title: string;
  subtitles?: Title[];
  children?: React.ReactNode;
  className?: string;
};

export default OverviewPageProps;
