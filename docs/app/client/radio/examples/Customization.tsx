"use client";

import { Radio } from "@heathmont/moon-core-tw";
import { useState } from "react";

const Customization = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  return (
    <div className="flex flex-col gap-space-24 items-center">
      <Radio value={value1} onChange={setValue1}>
        <Radio.Option
          value="option1"
          className="w-48 p-space-8 justify-between hover:bg-tertiary transition-colors rounded-8"
        >
          Customized Option 1
          <Radio.Indicator />
        </Radio.Option>
        <Radio.Option
          value="option2"
          className="w-48 p-space-8 justify-between hover:bg-tertiary transition-colors rounded-8"
        >
          Customized Option 2
          <Radio.Indicator />
        </Radio.Option>
      </Radio>

      <Radio value={value2} onChange={setValue2}>
        <Radio.Option value="option1">
          <Radio.Indicator className="border-negative" />
          Customized Indicator 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator className="moon-checked:border-discovery after:bg-discovery" />
          Customized Indicator 2
        </Radio.Option>
      </Radio>

      <Radio value={value3} onChange={setValue3} className="flex gap-space-16">
        <Radio.Option value="option1">
          <Radio.Indicator />
          Horizontal Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Horizontal Option 2
        </Radio.Option>
      </Radio>

      <Radio value={value4} onChange={setValue4} className="flex gap-space-16">
        <Radio.Option
          value="option1"
          className="flex flex-col items-center gap-0"
        >
          Top Label Option 1
          <Radio.Indicator />
        </Radio.Option>
        <Radio.Option
          value="option2"
          className="flex flex-col items-center gap-0"
        >
          Top Label Option 2
          <Radio.Indicator />
        </Radio.Option>
      </Radio>
    </div>
  );
};

export default Customization;
