import { useState } from "react";
import {
  ArrowKeysType,
  KEYS,
  NavigationTagsOutput,
} from "../types/navigationTagsTypes";

export const NO_FOCUS_TAG = -1;

const navigateTags = (
  selectedTagIndex: number,
  tagsLength: number,
  keyCode: ArrowKeysType,
) => {
  if (keyCode === KEYS.ARROW_RIGHT) {
    return selectedTagIndex < tagsLength - 1
      ? selectedTagIndex + 1
      : NO_FOCUS_TAG;
  }

  return selectedTagIndex === NO_FOCUS_TAG
    ? tagsLength - 1
    : selectedTagIndex - 1;
};

export const useNavigationTags = (tagsLength: number): NavigationTagsOutput => {
  const [selectedTagIndex, setSelectedTagIndex] =
    useState<number>(NO_FOCUS_TAG);

  const onKeyDownNavigationTags = (keyCode: ArrowKeysType | false) => {
    if (
      !keyCode ||
      (keyCode === KEYS.ARROW_RIGHT && selectedTagIndex === NO_FOCUS_TAG) ||
      (keyCode === KEYS.ARROW_LEFT && !selectedTagIndex)
    ) {
      return;
    }

    const newValue = navigateTags(selectedTagIndex, tagsLength, keyCode);
    setSelectedTagIndex(newValue);
  };

  return {
    selectedTagIndex,
    onKeyDownNavigationTags,
    setSelectedTagIndex,
  };
};
