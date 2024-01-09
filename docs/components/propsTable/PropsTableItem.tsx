import { PropsTableProp, PropsTablePropTypes } from "@/types";
import { Tag } from "@heathmont/moon-base-tw";

type PropsTableItemProps = {
  prop: PropsTableProp;
};

const PropsTableItem = ({ prop }: PropsTableItemProps) => {
  const { name, type, defaultState, required, description } = prop;

  const renderType = (item: PropsTablePropTypes) => {
    // Check using Regex if the prop is a arrow function
    const isArrowFunction = /\(([^)]+)\) => \w/.test(item);
    // Check using Regex if the prop is a object
    const isObject = /\{*\}/.test(item);

    if (isArrowFunction || isObject || item.startsWith(`"`)) {
      return item;
    } else if (["number", "boolean", "string"].includes(item)) {
      return item;
    } else {
      return `"${item}"`;
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-6 relative after:absolute after:h-px after:bg-beerus after:inset-x-0 after:bottom-0 ">
      <div className="flex w-full items-center gap-6 text-moon-16">
        <span className="w-36 overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
          Prop
        </span>
        <div className="w-full flex">
          <Tag
            className="text-moon-16"
            isUppercase={false}
            color="text-frieza"
            bgColor="bg-frieza-10"
          >
            {name}
          </Tag>
        </div>
      </div>
      <div className="flex w-full items-center gap-6 text-moon-16 ">
        <span className="w-36 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          Default
        </span>
        <p className="w-full">{defaultState || "-"}</p>
      </div>
      <div className="flex w-full items-center gap-6 text-moon-16 ">
        <span className="w-36 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          Required
        </span>
        <p className="w-full">{required ? "Yes" : "No"}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:items-center gap-6 text-moon-16 ">
        <span className="w-36 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          Description
        </span>
        <p className="w-full">{description}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-6">
        <div className="w-36" />
        <p className="text-moon-16 text-frieza w-full">
          {type?.map(renderType).join(" | ")}
        </p>
      </div>
    </div>
  );
};

export default PropsTableItem;
