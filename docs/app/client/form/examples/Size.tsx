"use client";

import {
  Form,
  Label,
  Hint,
  Input,
  Textarea,
  Button,
  NativeSelect,
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

const Sizes = () => (
  <>
    <Form
      className="flex flex-col gap-space-16 w-full max-w-sm"
      method="get"
      id="login"
      onSubmit={() => console.log("Submit")}
      size="sm"
    >
      <Form.Item error>
        <Label htmlFor="name">Username</Label>
        <Input placeholder="Your username..." id="name" />
        <Hint error>
          <GenericInfo />
          Informative message holder
        </Hint>
      </Form.Item>
      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Your Email..." id="email" type="email" />
      </Form.Item>
      <Form.Item className="flex gap-space-8">
        <fieldset className="w-full">
          <Label htmlFor="month">Month</Label>
          <NativeSelect id="month">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
        <fieldset className="w-full">
          <Label htmlFor="year">Year</Label>
          <NativeSelect id="year">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
      </Form.Item>
      <Form.Item>
        <Label htmlFor="info">Additional information</Label>
        <Textarea id="info" />
      </Form.Item>
      <Button type="submit" form="login" value="Submit" size="sm">
        Create account
      </Button>
    </Form>
    <Form
      className="flex flex-col gap-space-12 w-full max-w-sm"
      method="get"
      id="login"
      onSubmit={() => console.log("Submit")}
      size="lg"
    >
      <Form.Item error>
        <Label htmlFor="name">Username</Label>
        <Input placeholder="Your username..." id="name" />
        <Hint error>
          <GenericInfo />
          Informative message holder
        </Hint>
      </Form.Item>
      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Your Email..." id="email" type="email" />
      </Form.Item>
      <Form.Item className="flex gap-space-8">
        <fieldset className="w-full">
          <Label htmlFor="month">Month</Label>
          <NativeSelect id="month">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
        <fieldset className="w-full">
          <Label htmlFor="year">Year</Label>
          <NativeSelect id="year">
            {options.map((opt, key) => (
              <option value={opt.name} key={key}>
                {opt.name}
              </option>
            ))}
          </NativeSelect>
        </fieldset>
      </Form.Item>
      <Form.Item>
        <Label htmlFor="info">Additional information</Label>
        <Textarea id="info" />
      </Form.Item>
      <Button type="submit" form="login" value="Submit" size="lg">
        Create account
      </Button>
    </Form>
  </>
);

export default Sizes;
