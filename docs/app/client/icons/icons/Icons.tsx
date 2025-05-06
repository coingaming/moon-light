/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import IconsBlock from "@/components/IconsBlock";
import useGroupedIcons from "@/hooks/useGroupedIcons";
import IconWrapper from "./IconWrapper";

const Icons = async () => {
  const groupedIcons = useGroupedIcons();
  return (
    <>
      {Object.entries(groupedIcons).map(([groupName, icons]) => (
        <IconsBlock title={groupName} key={groupName}>
          {icons.map(({ iconName, IconComponent }) =>
            React.isValidElement(<IconComponent />) ? (
              <IconWrapper name={iconName} key={iconName}>
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
