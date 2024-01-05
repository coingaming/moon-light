"use client";

import React from "react";
import { Tabs } from "@heathmont/moon-core-tw";

const TabsOnlyView = () => (
  <div className="flex flex-col gap-4">
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.List>
    </Tabs>

    <Tabs>
      <Tabs.List>
        <Tabs.Pill className="border border-beerus hover:bg-gohan">
          Tab 1
        </Tabs.Pill>
        <Tabs.Pill className="border border-beerus hover:bg-gohan">
          Tab 2
        </Tabs.Pill>
        <Tabs.Pill className="border border-beerus hover:bg-gohan">
          Tab 3
        </Tabs.Pill>
      </Tabs.List>
    </Tabs>
  </div>
);

export default TabsOnlyView;
