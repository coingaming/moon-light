"use client";

import { TagsInput } from "@heathmont/moon-core-tw";
import type Size from "@heathmont/moon-core-tw/lib/tagsInput/private/types/Size";
import { useCallback, useState } from "react";

const TagsInputWithLogic = ({ size }: { size?: Size }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const onEnter = useCallback(
    (value: string) => {
      setSelected([...selected, value]);
    },
    [selected, setSelected],
  );
  const onClear = useCallback(
    (index: number) => {
      setSelected(selected.filter((item: string, id: number) => id !== index));
    },
    [selected, setSelected],
  );

  return (
    <TagsInput
      selected={selected}
      onEnter={onEnter}
      onClear={onClear}
      size={size as Size}
      className="mb-4"
    >
      {selected.map((text, index) => (
        <TagsInput.SelectedItem key={index} index={index} label={text} />
      ))}
    </TagsInput>
  );
};

const DifferentSizes = () => (
  <div className="w-full max-w-sm">
    <p>Small</p>
    <TagsInputWithLogic size="sm" />
    <p>Medium (default)</p>
    <TagsInputWithLogic />
    <p>Large</p>
    <TagsInputWithLogic size="lg" />
  </div>
);

export default DifferentSizes;
