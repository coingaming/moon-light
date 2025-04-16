"use client";

import { Tabs } from "@heathmont/moon-core-tw";

const PillDefault = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Pill
          className={({ selected }: { selected: boolean }) =>
            selected ? "" : "border border-primary hover:bg-hover"
          }
        >
          Tab 1
        </Tabs.Pill>
        <Tabs.Pill
          className={({ selected }: { selected: boolean }) =>
            selected ? "" : "border border-primary hover:bg-hover"
          }
        >
          Tab 2
        </Tabs.Pill>
        <Tabs.Pill
          className={({ selected }: { selected: boolean }) =>
            selected ? "" : "border border-primary hover:bg-hover"
          }
        >
          Tab 3
        </Tabs.Pill>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Tabs.Panel>
        <Tabs.Panel>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularized in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Tabs.Panel>
        <Tabs.Panel>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtedly source.
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export default PillDefault;
