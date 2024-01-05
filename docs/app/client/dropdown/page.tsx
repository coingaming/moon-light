import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import {
  dropdownProps,
  optionsProps,
  optionProps,
  selectProps,
  multiSelectProps,
  hiddenInputProps,
} from "./props";
import image from "./dropdown.webp";

const ordered = [
  "Default",
  "TriggerElements",
  "OptionsVariants",
  "Select",
  "SelectStates",
  "HiddenInput",
  "InsetSelect",
  "InsetSelectStates",
  "MultiSelect",
  "InsetMultiSelect",
  "CustomMenuWidth",
];

export default async function DropdownPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      dropdown: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/dropdown/examples/${searchParam}`),
      {
        loading: () => <Loader />,
        ssr: false,
      },
    );
    return (
      <div className="p-4" id="playwright-test">
        <Component />
      </div>
    );
  }

  return (
    <MainLayout
      isMockup={isMockup}
      componentName="dropdown"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={"Dropdown"}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="dropdown"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Dropdown props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown</span> component:
            </p>
          }
          data={dropdownProps}
        />
        <PropsTable
          title="Dropdown.Options props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown.Options</span> component:
            </p>
          }
          data={optionsProps}
        />
        <PropsTable
          title="Dropdown.Option props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown.Option</span> component:
            </p>
          }
          data={optionProps}
        />
        <PropsTable
          title="Dropdown.Select | Dropdown.InsetSelect props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown.Select</span> and{" "}
              <span className="text-frieza">Dropdown.InsetSelect</span>{" "}
              components:
            </p>
          }
          data={selectProps}
        />
        <PropsTable
          title="Dropdown.MultiSelect | Dropdown.InsetMultiSelect props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown.MultiSelect</span> and{" "}
              <span className="text-frieza">Dropdown.InsetMultiSelect</span>{" "}
              components:
            </p>
          }
          data={multiSelectProps}
        />
        <PropsTable
          title="Dropdown.HiddenInput props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Dropdown.HiddenInput</span>{" "}
              component:
            </p>
          }
          data={hiddenInputProps}
        />
      </div>
    </MainLayout>
  );
}
