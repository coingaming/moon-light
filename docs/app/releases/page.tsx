import OverviewPage from "@/components/OverviewPage";
import { ReleaseSection } from "@/components/releaseSection/ReleaseSection";

export const ReleasesPage = () => {
  return (
    <OverviewPage
      className="gap-12"
      title="Releases"
      description="Moon Design System releases and their change logs."
      subtitles={[
        { subtitle: "10.12.1", id: "10-12-1" },
        { subtitle: "10.12.0", id: "10-12-0" },
        { subtitle: "10.11.5", id: "10-11-5" },
      ]}
    >
      <ReleaseSection
        title="10.12.1"
        href="10-12-1"
        date="January 15, 2024"
        change="Card"
        description="Added: Added a new component."
      ></ReleaseSection>
      <ReleaseSection
        title="10.12.0"
        href="10-12-0"
        date="January 5, 2024"
      ></ReleaseSection>
      <ReleaseSection
        title="10.11.5"
        href="10-11-5"
        date="January 1, 2024"
      ></ReleaseSection>
    </OverviewPage>
  );
};

export default ReleasesPage;
