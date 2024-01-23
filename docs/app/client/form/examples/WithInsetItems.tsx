"use client";

import {
  Form,
  Label,
  Hint,
  InsetInput,
  Textarea,
  Button,
  InsetNativeSelect,
} from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

const options = [
  { name: "01" },
  { name: "02" },
  { name: "03" },
  { name: "04" },
  { name: "05" },
  { name: "06" },
];

const WithInsetItems = () => (
  <Form
    className="flex flex-col gap-4 w-full max-w-sm"
    method="get"
    id="login"
    onSubmit={() => console.log("Submit")}
  >
    <Form.Item error>
      <InsetInput placeholder="Your username..." id="name">
        <InsetInput.Label>Username</InsetInput.Label>
      </InsetInput>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </Form.Item>
    <Form.Item>
      <InsetInput placeholder="Your Email..." id="email" type="email">
        <InsetInput.Label>Email</InsetInput.Label>
      </InsetInput>
    </Form.Item>
    <Form.Item className="flex gap-2">
      <fieldset className="w-full">
        <InsetNativeSelect id="month" label="Month">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </InsetNativeSelect>
      </fieldset>
      <fieldset className="w-full">
        <InsetNativeSelect id="year" label="Year">
          {options.map((opt, key) => (
            <option value={opt.name} key={key}>
              {opt.name}
            </option>
          ))}
        </InsetNativeSelect>
      </fieldset>
    </Form.Item>
    <Form.Item>
      <Label htmlFor="info">Additional information</Label>
      <Textarea id="info" />
    </Form.Item>
    <Button type="submit" form="login" value="Submit" size="xl">
      Create account
    </Button>
  </Form>
);

export default WithInsetItems;
