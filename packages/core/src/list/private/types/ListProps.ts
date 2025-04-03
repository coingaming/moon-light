export type ListProps = {
  children: React.ReactNode;
  className?: string;
};

export type ListItemProps = {
  children: React.ReactNode;
  classNames?: {
    itemContainer?: string;
    itemContent?: string;
  };
};
