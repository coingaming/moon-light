"use client";

import { Radio } from "@heathmont/moon-core-tw";
import { useState } from "react";

const AsFormItem = () => {
  const [value, setValue] = useState("");
  return (
    <Radio value={value} onChange={setValue} name="Form Item">
      <Radio.Option value="option1">
        <Radio.Indicator />
        Option 1
      </Radio.Option>
      <Radio.Option value="option2">
        <Radio.Indicator />
        Option 2
      </Radio.Option>
    </Radio>
  );
};

export default AsFormItem;
