export enum KEYS {
  ENTER = "Enter",
  BACKSPACE = "Backspace",
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
}

export type NavigationTagsOutput = {
  selectedTagIndex: number;
  onKeyDownNavigationTags: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setSelectedTagIndex: (newIndex: number) => void;
};
