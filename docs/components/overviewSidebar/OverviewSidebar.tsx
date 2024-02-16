import SidebarItem from "../sidebar/SidebarItem";
import PageNavigation from "./PageNavigation";

interface Title {
  id: string;
  subtitle: string;
}

interface OverviewSidebarProps {
  subtitles: Title[];
}

const OverviewSidebar: React.FC<OverviewSidebarProps> = ({ subtitles }) => (
  <PageNavigation>
    {subtitles.map((title, index) => (
      <li key={index}>
        <SidebarItem href={`#${title.id}`}>{title.subtitle}</SidebarItem>
      </li>
    ))}
  </PageNavigation>
);

export default OverviewSidebar;
