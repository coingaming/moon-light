export type ListProps = {
  children: React.ReactNode;
  className?: string;
  dataTestId?: string;
};

export type ListItemProps = {
  children: React.ReactNode;
  dataTestId?: string;
  classNames?: {
    itemContainer?: string;
    itemContent?: string;
  };
};
