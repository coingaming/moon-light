import Button from "@heathmont/moon-base-tw/lib/button/Button";

export const Multiline = () => (
  <Button size="xl" className="py-3">
    <span className="flex flex-col gap-1">
      <span className="leading-none">Button text</span>
      <span className="text-body-100 font-normal leading-[12px]">
        Placeholder text
      </span>
    </span>
  </Button>
);
