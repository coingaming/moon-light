import React from "react";
import type { PropsTableProp, TagTypes } from "@/types";
import type { StaticImageData } from "next/image";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import IconSearch from "./search/IconSearch";
import { useGetExample } from "@/utils/useGetExample";
import useComponentInfo from "@/hooks/useComponentInfo";
import image from "./icons.webp";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import useGroupedIcons from "@/hooks/useGroupedIcons";
import Icons from "./icons/Icons";

const IconsPage = async () => {
  const data = await useGetExample("icons");
  const info = useComponentInfo("icons");
  const groupedIcons = useGroupedIcons();

  return (
    <MainLayout
      componentName="icons"
      contentSidebar={[
        ...(info?.examples as string[]),
        ...Object.keys(groupedIcons),
      ]}
    >
      <div className="flex flex-col gap-6 text-moon-14 pb-20">
        <PageHeadComponent
          title="Icons"
          description={data?.description}
          tags={(info?.tags as TagTypes[]) || []}
          name={"icons"}
          image={image}
        />
        <IconSearch />
        <ExampleSectionData
          componentName={"icons"}
          client={{
            description: data?.description,
            descriptions: data?.descriptions || {},
            examples: data?.examples || {},
          }}
          data={info?.examples as string[]}
        />
        <Icons />
      </div>
    </MainLayout>
  );
};

export default IconsPage;
