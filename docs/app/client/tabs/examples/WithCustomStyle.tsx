"use client";

import { Tabs } from "@heathmont/moon-core-tw";

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

const WithCustomStyle = () => (
  <div className="flex flex-col gap-space-16">
    <Tabs>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab}
            className={({ selected }: { selected: boolean }) =>
              `hover:text-discovery after:bg-discovery ${
                selected && "text-discovery"
              }`
            }
          >
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>

    <Tabs>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Pill
            key={tab}
            className="hover:bg-discovery-subtle moon-selected:bg-discovery-subtle"
          >
            <span className="moon-selected:text-discovery">{tab}</span>
          </Tabs.Pill>
        ))}
      </Tabs.List>
    </Tabs>
  </div>
);

export default WithCustomStyle;
