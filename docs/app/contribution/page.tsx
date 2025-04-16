import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import contribution from "@/generated/contribution";

export default async function ContributionPage() {
  return (
    <OverviewPage className="gap-space-48" title="Contribution">
      <div className="flex flex-col gap-space-24">
        <MDX markdown={contribution} />
      </div>
    </OverviewPage>
  );
}
