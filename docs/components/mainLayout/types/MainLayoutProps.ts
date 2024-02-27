import type Title from "./Title";

interface MainLayoutProps {
  children: React.ReactNode;
  isMockup?: boolean;
  componentName?: string;
  contentSidebar?: string[];
  subtitles?: Title[];
  title?: string;
}

export default MainLayoutProps;
