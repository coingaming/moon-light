import React from "react";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import { ListItemProps, ListProps } from "./private/types/ListProps";

const ListRoot = ({ children, className }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

export const Item = ({ children, classNames }: ListItemProps) => {
  return (
    <li
      className={mergeClassnames(
        "flex justify-around",
        classNames?.itemContainer ?? "",
      )}
    >
      <p
        className={mergeClassnames(
          "w-100 flex justify-around gap-4 border-b-1 border-bulma pt-1 pb-1 w-full",
          classNames?.itemContent ?? "",
        )}
      >
        {children}
      </p>
    </li>
  );
};

export const ItemContent = ({ children, className }: ListProps) => {
  return (
    <p className={mergeClassnames("flex items-center", className)}>
      {children}
    </p>
  );
};

const List = Object.assign(ListRoot, {
  Item,
  ItemContent,
});

export default List;
