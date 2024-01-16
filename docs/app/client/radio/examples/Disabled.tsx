"use client";

import { Radio } from "@heathmont/moon-core-tw";
import { useState } from "react";

const Disabled = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <>
      <Radio value={value1} onChange={setValue1}>
        <Radio.Option value="option1">
          <Radio.Indicator />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Option 2
        </Radio.Option>
        <Radio.Option value="option3" disabled>
          <Radio.Indicator />
          Option 3
        </Radio.Option>
      </Radio>

      <Radio value={value2} onChange={setValue2} disabled>
        <Radio.Option value="option1">
          <Radio.Indicator />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Option 2
        </Radio.Option>
        <Radio.Option value="option3">
          <Radio.Indicator />
          Option 3
        </Radio.Option>
      </Radio>
    </>
  );
};

export default Disabled;
