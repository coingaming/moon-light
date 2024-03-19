import type Title from "./Title";

interface MainLayoutProps {
  children: React.ReactNode;
  isMockup?: boolean;
  componentName?: string;
  contentSidebar?: string[];
  title?: string;
}

export default MainLayoutProps;
