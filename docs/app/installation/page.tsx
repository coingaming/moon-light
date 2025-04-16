import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import installation from "@/generated/installation";

export default async function InstallationPage() {
  return (
    <OverviewPage className="gap-space-48" title="Installation">
      <div className="flex flex-col gap-space-24">
        <MDX markdown={installation} />
      </div>
    </OverviewPage>
  );
}
