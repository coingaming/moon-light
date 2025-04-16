"use client";

import { Hint, TagsInput } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";
import { useCallback, useState } from "react";

const Example = () => {
  const [selected1, setSelected1] = useState<string[]>(["Preset data"]);
  const [selected2, setSelected2] = useState<string[]>(["Preset data"]);

  const onEnter1 = useCallback(
    (value: string) => {
      setSelected1([...selected1, value]);
    },
    [selected1, setSelected1],
  );

  const onEnter2 = useCallback(
    (value: string) => {
      setSelected2([...selected2, value]);
    },
    [selected2, setSelected2],
  );

  const onClear1 = useCallback(
    (index: number) => {
      setSelected1(
        selected1.filter((item: string, id: number) => id !== index),
      );
    },
    [selected1, setSelected1],
  );

  const onClear2 = useCallback(
    (index: number) => {
      setSelected2(
        selected2.filter((item: string, id: number) => id !== index),
      );
    },
    [selected2, setSelected2],
  );

  return (
    <div className="flex flex-col items-center w-full h-50">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full gap-space-8">
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected1}
            label="Disabled"
            disabled
            onEnter={onEnter1}
            onClear={onClear1}
          >
            {selected1.map((text, index) => (
              <TagsInput.SelectedItem key={index} index={index} label={text} />
            ))}
          </TagsInput>
          <Hint disabled>Informative message holder</Hint>
        </div>
        <div className="flex flex-col w-full max-w-sm lg:max-w-md">
          <TagsInput
            selected={selected2}
            label={<span className="text-negative">Error</span>}
            isError
            onEnter={onEnter2}
            onClear={onClear2}
          >
            {selected2.map((text, index) => (
              <TagsInput.SelectedItem key={index} index={index} label={text} />
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
