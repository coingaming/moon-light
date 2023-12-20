"use client";

import { TagsInput } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState<string[]>(["Preset data"]);

  const onEnter = useCallback(
    (value: string) => {
      setSelected([...selected, value]);
    },
    [selected, setSelected],
  );

  const onClear = useCallback(
    (index: number) => {
      setSelected(selected.filter((item, id) => id !== index));
    },
    [selected, setSelected],
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-2">
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected}
            label="Lower"
            onEnter={onEnter}
            onClear={onClear}
          >
            {selected.map((text, index) => (
              <TagsInput.SelectedItem
                isUppercase={false}
                index={index}
                label={text}
              />
            ))}
          </TagsInput>
        </div>
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected}
            label="Capitalized"
            onEnter={onEnter}
            onClear={onClear}
          >
            {selected.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
        </div>
      </div>
    </div>
  );
};

export default Example;
