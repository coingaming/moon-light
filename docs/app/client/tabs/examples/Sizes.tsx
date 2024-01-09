"use client";

import React from "react";
import { Tabs } from "@heathmont/moon-core-tw";

const sharedPillClassName = "border border-beerus";

const Sizes = () => (
  <div className="flex flex-col gap-4">
    <p>Tab:</p>
    <div className="flex flex-col justify-between w-full gap-10">
      <Tabs>
        <Tabs.List size="sm">
          <Tabs.Tab>Tab 1 (sm)</Tabs.Tab>
          <Tabs.Tab>Tab 2 (sm)</Tabs.Tab>
          <Tabs.Tab>Tab 3 (sm)</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Tab 1 (md)</Tabs.Tab>
          <Tabs.Tab>Tab 2 (md)</Tabs.Tab>
          <Tabs.Tab>Tab 3 (md)</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
    <p className="mt-10">Pill:</p>
    <div className="flex flex-col justify-between w-full gap-10">
      <Tabs>
        <Tabs.List size="sm">
          <Tabs.Pill className={sharedPillClassName}>Tab 1 (sm)</Tabs.Pill>
          <Tabs.Pill className={sharedPillClassName}>Tab 2 (sm)</Tabs.Pill>
          <Tabs.Pill className={sharedPillClassName}>Tab 3 (sm)</Tabs.Pill>
        </Tabs.List>
      </Tabs>
      <Tabs>
        <Tabs.List>
          <Tabs.Pill className={sharedPillClassName}>Tab 1 (md)</Tabs.Pill>
          <Tabs.Pill className={sharedPillClassName}>Tab 2 (md)</Tabs.Pill>
          <Tabs.Pill className={sharedPillClassName}>Tab 3 (md)</Tabs.Pill>
        </Tabs.List>
      </Tabs>
    </div>
  </div>
);

export default Sizes;
