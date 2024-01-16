"use client";

import { Radio } from "@heathmont/moon-core-tw";
import { useState } from "react";

const Default = () => {
  const [value, setValue] = useState("");
  return (
    <Radio value={value} onChange={setValue}>
      <Radio.Option value="option1">
        <Radio.Indicator />
      </Radio.Option>
      <Radio.Option value="option2">
        <Radio.Indicator />
      </Radio.Option>
    </Radio>
  );
};

export default Default;
