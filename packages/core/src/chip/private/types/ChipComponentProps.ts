import type ChipPolymorphicProps from "./ChipPolymorphicProps";

type ChipComponentProps = <C extends React.ElementType = "button">(
  props: ChipPolymorphicProps<C>,
) => React.ReactElement | null;

export default ChipComponentProps;
