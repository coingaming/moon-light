import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import changeLogs from "@/generated/changelog";

const changelogsOrder = [
  "packages/base",
  "packages/core",
  "packages/table-v8",
  "packages/cmdk",
  "packages/themes",
  "docs",
] as const;

export default async function ReleasesPage() {
  return (
    <OverviewPage
      className="gap-10"
      title="Releases"
      description="Moon Design System releases and their change logs."
    >
      <div className="flex flex-col gap-3">
        {changelogsOrder.map((log, index) => {
          return changeLogs[log] ? (
            <MDX key={index} markdown={changeLogs[log]} />
          ) : undefined;
        })}
      </div>
    </OverviewPage>
  );
}
