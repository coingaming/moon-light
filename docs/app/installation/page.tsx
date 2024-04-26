import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import installation from "@/generated/installation";

export default async function InstallationPage() {
  return (
    <>
      <OverviewPage className="gap-12" title="Installation">
        <div className="flex flex-col gap-6">
          <MDX markdown={installation} />
        </div>
      </OverviewPage>
    </>
  );
}
