export interface GenericExampleType {
  description: string;
  descriptions: Record<string, string>;
  examples: Record<string, string>;
  examplesAnatomy?: Record<string, string>;
  anatomy: string;
  props: string;
}

export type GenericExampleTypePartial = Partial<GenericExampleType>;
