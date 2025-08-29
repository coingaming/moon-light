export enum KEYS {
  ENTER = "Enter",
  BACKSPACE = "Backspace",
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
}

export type ArrowKeysType = KEYS.ARROW_LEFT | KEYS.ARROW_RIGHT;

export const ARROW_KEYS = [KEYS.ARROW_LEFT, KEYS.ARROW_RIGHT] as const;

export type NavigationTagsOutput = {
  selectedTagIndex: number;
  onKeyDownNavigationTags: (keyCode: ArrowKeysType | false) => void;
  setSelectedTagIndex: (newIndex: number) => void;
};
