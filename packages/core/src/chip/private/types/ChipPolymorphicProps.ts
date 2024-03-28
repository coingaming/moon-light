import type ChipProps from "./ChipProps";

type ChipPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ChipProps>;

export default ChipPolymorphicProps;
