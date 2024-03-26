import { MDX } from "@/components/MDX";
import OverviewPage from "@/components/overviewPage/OverviewPage";
import ReleaseSidebar from "@/components/releaseSidebar/releaseSidebar";
import changeLogs from "@/generated/changelog";

const changelogsOrder = [
  "packages/base",
  "packages/core",
  "packages/table-v8",
  "packages/cmdk",
  "packages/themes",
  "docs",
] as const;

export type LogItem = {
  logKey: string;
  header: string;
  logItem: string;
}

const pickHeader = (content: string) => content.replace(/^#\s([^\n]+).+$/gsm, "$1");

const prepareData = () => {
  return changelogsOrder.reduce((acc, logKey) => {
    const logItem = changeLogs[logKey];
    if (logItem) {
      acc.push({ logKey, header: pickHeader(logItem), logItem });
    }
    return acc;
  }, [] as LogItem[]);
}

export default async function ReleasesPage() {
  const logItems = prepareData();
  return (
    <>
      <OverviewPage
        className="gap-10"
        title="Releases"
        description="Moon Design System releases and their change logs."
      >
        <div className="flex flex-col gap-4">
          {logItems.map((log, index) => 
            <div key={index} id={log.header} className="flex flex-col gap-3">
              <MDX markdown={log.logItem} />
            </div>
          )}
        </div>
      </OverviewPage>
      <ReleaseSidebar items={logItems} />
    </>
  );
}
