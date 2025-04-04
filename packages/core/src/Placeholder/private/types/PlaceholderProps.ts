export enum Shape {
  SQUARE = "SQUARE",
  CIRCLE = "CIRCLE",
}

export type PlaceholderProps = {
  shape: Shape;
  className?: string;
};
