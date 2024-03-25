import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import changeLogs from "@/generated/changelog";

const partsOrder = [
  "packages/base",
  "packages/core",
  "packages/table-v8",
  "packages/cmdk",
  "packages/themes",
  "docs",
];

const logs = changeLogs as { [key: string]: string };

export default async function ReleasesPage() {
  return (
    <OverviewPage
      className="gap-10"
      title="Releases"
      description="Moon Design System releases and their change logs."
    >
      <div className="flex flex-col gap-3">
        {partsOrder.map((part, index) => {
          return logs[part] ? (
            <MDX key={index} markdown={logs[part]} />
          ) : undefined;
        })}
      </div>
    </OverviewPage>
  );
}
