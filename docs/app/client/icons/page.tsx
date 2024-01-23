import { Chip, Loader, Modal } from "@heathmont/moon-core-tw";
import * as MoonIcons from "@heathmont/moon-icons-tw";
import React from "react";

import type { PropsTableProp, TagTypes } from "@/types";
import type { StaticImageData } from "next/image";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import IconsBlock from "@/components/IconsBlock";
import IconSearch from "./search/IconSearch";
import Icon from "./icons/icon";
import { useGetExample } from "@/utils/useGetExample";
import useComponentInfo from "@/hooks/useComponentInfo";
import image from "./icons.webp";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import IconWrapper from "./icons/iconWrapper";
import Icons from "./icons/icons";
import useGroupedIcons from "@/hooks/useGroupedIcons";

interface DocsPageProps {
  componentName: string;
  isMockup?: boolean;
  searchParam?: string;
  description?: string;
  title: string;
  ordered: string[];
  tags: TagTypes[];
  examples: Record<string, string>;
  descriptions: Record<string, string>;
  propsTable?: Record<string, PropsTableProp[]>;
  examplesAnatomy?: Record<string, string>;
  anatomy?: string;
  image?: StaticImageData;
}

type IconProps = {
  name: string;
  children?: React.ReactNode;
};

const DocsPage = async (props: DocsPageProps) => {
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

export default DocsPage;
