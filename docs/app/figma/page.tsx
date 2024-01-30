import OverviewPage from "@/components/OverviewPage";
import Video from "./Video";
import { PageSection } from "@/components/pageSection/PageSection";

export const FigmaPage = () => {
  return (
    <OverviewPage
      title="Figma"
      description="The Figma UI Kit is open sourced by Yolo Group."
      subtitles={[{ subtitle: "Grab a copy", id: "grab-a-copy" }]}
    >
      <Video />
      <PageSection title="Grab a copy" href="grab-a-copy">
        <a
          href="https://www.figma.com/community/file/1002945721703152933"
          target="_blank"
          rel="noreferrer"
          className="underline text-piccolo"
        >
          https://www.figma.com/community/file/1002945721703152933
        </a>
      </PageSection>
    </OverviewPage>
  );
};

export default FigmaPage;
