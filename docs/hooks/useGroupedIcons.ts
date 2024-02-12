import * as MoonIcons from "@heathmont/moon-icons-tw";

function extractGroupName(iconName: string): string {
  const match = iconName.match(/^[A-Z][a-z]+/);
  return match ? match[0] : iconName;
}

export default function useGroupedIcons() {
  const groupedIcons = Object.entries(MoonIcons).reduce(
    (groups, [iconName, IconComponent]) => {
      const groupName = extractGroupName(iconName);
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push({ iconName, IconComponent });
      return groups;
    },
    {} as Record<
      string,
      Array<{ iconName: string; IconComponent: React.ElementType }>
    >,
  );

  return groupedIcons;
}
