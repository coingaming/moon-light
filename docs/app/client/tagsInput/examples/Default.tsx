"use client";

import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Default = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const onEnter = useCallback(
    (value: string) => {
      setSelected([...selected, value]);
    },
    [selected, setSelected]
  );

  const onClear = useCallback(
    (index: number) => {
      setSelected(selected.filter((item: string, id: number) => id !== index));
    },
    [selected, setSelected]
  );

  return (
    <TagsInput selected={selected} onEnter={onEnter} onClear={onClear}>
      {selected.map((text, index) => (
        <TagsInput.SelectedItem index={index} label={text} />
      ))}
    </TagsInput>
  );
};

export default Default;
