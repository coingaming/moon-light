import { Tabs as TabsComponent } from "@heathmont/moon-core-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TabsComponent> = {
  title: "Components/Tabs",
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: "A function called whenever the active tab changes",
      type: "function",
      control: "object",
    },
    selectedIndex: {
      description:
        "The selected index if you want to use the Tabs component as a controlled component",
      type: "number",
      control: "number",
    },
  },
  render: ({ selectedIndex }) => {
    return (
      <TabsComponent selectedIndex={selectedIndex}>
        <TabsComponent.List>
          <TabsComponent.Tab>Tab 1</TabsComponent.Tab>
          <TabsComponent.Tab>Tab 2</TabsComponent.Tab>
          <TabsComponent.Tab>Tab 3</TabsComponent.Tab>
        </TabsComponent.List>
        <TabsComponent.Panels>
          <TabsComponent.Panel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </TabsComponent.Panel>
          <TabsComponent.Panel>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularized in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </TabsComponent.Panel>
          <TabsComponent.Panel>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtedly source.
          </TabsComponent.Panel>
        </TabsComponent.Panels>
      </TabsComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TabsComponent>;

export const Tabs: Story = {
  args: {
    onChange: () => null,
    selectedIndex: 0,
  },
};
