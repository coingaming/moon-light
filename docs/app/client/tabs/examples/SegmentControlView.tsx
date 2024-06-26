"use client";

import { Tabs } from "@heathmont/moon-core-tw";

const SegmentControlView = () => (
  <>
    <Tabs>
      <Tabs.Segment size="sm">
        <Tabs.Pill>Tab 1</Tabs.Pill>
        <Tabs.Pill>Tab 2</Tabs.Pill>
        <Tabs.Pill>Tab 3</Tabs.Pill>
      </Tabs.Segment>
    </Tabs>
    <Tabs>
      <Tabs.Segment>
        <Tabs.Pill>Tab 1</Tabs.Pill>
        <Tabs.Pill>Tab 2</Tabs.Pill>
        <Tabs.Pill>Tab 3</Tabs.Pill>
      </Tabs.Segment>
    </Tabs>
  </>
);

export default SegmentControlView;
