import React from "react";
import * as MoonIcons from "@heathmont/moon-icons-tw";
import type { PropsTableProp, TagTypes } from "@/types";
import type { StaticImageData } from "next/image";
import IconsBlock from "@/components/IconsBlock";
import IconWrapper from "./iconWrapper";
import useGroupedIcons from "@/hooks/useGroupedIcons";

interface IconsProps {
  wrapperProps?: any;
  groupName?: string;
}

const Icons = async ({ wrapperProps, groupName }: IconsProps) => {
  const groupedIcons = useGroupedIcons();
  return (
    <>
      {Object.entries(groupedIcons).map(([groupName, icons]) => (
        <IconsBlock title={groupName} key={groupName}>
          {icons.map(({ iconName, IconComponent }) =>
            React.isValidElement(<IconComponent />) ? (
              <IconWrapper {...wrapperProps} name={iconName} key={iconName}>
                <IconComponent />
              </IconWrapper>
            ) : null,
          )}
        </IconsBlock>
      ))}
    </>
  );
};

export default Icons;
