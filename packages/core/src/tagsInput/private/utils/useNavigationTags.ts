import { useState } from "react";
import { KEYS, NavigationTagsOutput } from "../types/navigationTagsTypes";

export const NO_FOCUS_TAG = -1;

export const useNavigationTags = (tagsLength: number): NavigationTagsOutput => {
  const [selectedTagIndex, setSelectedTagIndex] =
    useState<number>(NO_FOCUS_TAG);

  const onKeyDownNavigationTags = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e?.code === KEYS.ARROW_RIGHT) {
      if (selectedTagIndex === NO_FOCUS_TAG) {
        return;
      }

      const newValue =
        selectedTagIndex + 1 === tagsLength
          ? NO_FOCUS_TAG
          : selectedTagIndex + 1;

      setSelectedTagIndex(newValue);
    }

    if (e?.code === KEYS.ARROW_LEFT) {
      if (selectedTagIndex === 0) {
        return;
      }

      const newValue =
        selectedTagIndex === NO_FOCUS_TAG
          ? tagsLength - 1
          : selectedTagIndex - 1;

      setSelectedTagIndex(newValue);
    }
  };

  return {
    selectedTagIndex,
    onKeyDownNavigationTags,
    setSelectedTagIndex,
  };
};
