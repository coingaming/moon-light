import React from "react";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import { ListItemProps, ListProps } from "./private/types/ListProps";

const ListRoot: React.FC<ListProps> = ({ children, className, dataTestId }) => {
  return (
    <ul data-testid={dataTestId || "list"} className={className}>
      {children}
    </ul>
  );
};

export const Item: React.FC<ListItemProps> = ({
  children,
  classNames,
  dataTestId,
}) => {
  return (
    <li data-testid={dataTestId} className={classNames?.itemContainer}>
      <p
        className={mergeClassnames(
          "flex justify-between border-b-1 border-primary pt-1 pb-1 w-full",
          classNames?.itemContent ?? "",
        )}
      >
        {children}
      </p>
    </li>
  );
};

export const ItemContent: React.FC<ListProps> = ({
  children,
  className,
  dataTestId,
}) => {
  return (
    <p
      data-testid={dataTestId}
      className={mergeClassnames("flex items-center", className)}
    >
      {children}
    </p>
  );
};

const List = Object.assign(ListRoot, {
  Item,
  ItemContent,
});

export default List;
