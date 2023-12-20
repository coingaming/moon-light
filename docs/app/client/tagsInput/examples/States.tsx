"use client";

import { Hint, TagsInput } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";
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
      setSelected(selected.filter((item: string, id: number) => id !== index));
    },
    [selected, setSelected],
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-2">
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected}
            label="Disabled"
            disabled
            onEnter={onEnter}
            onClear={onClear}
          >
            {selected.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
          <Hint disabled>Informative message holder</Hint>
        </div>
        <div className="flex flex-col w-full">
          <TagsInput
            selected={selected}
            label="Error"
            isError
            onEnter={onEnter}
            onClear={onClear}
          >
            {selected.map((text, index) => (
              <TagsInput.SelectedItem index={index} label={text} />
            ))}
          </TagsInput>
          <Hint error>
            <GenericInfo />
            Informative message holder
          </Hint>
        </div>
      </div>
    </div>
  );
};

export default Example;
