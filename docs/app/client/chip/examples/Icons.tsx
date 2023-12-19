import { Chip } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const sharedProps = {
  className: "border border-beerus",
};

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-start gap-2 w-full">
      <p>Small:</p>
      <Chip
        {...sharedProps}
        size="sm"
        iconLeft={<OtherFrame className="text-moon-24" />}
      >
        Left Icon
      </Chip>
      <Chip
        {...sharedProps}
        size="sm"
        iconRight={<OtherFrame className="text-moon-24" />}
      >
        Right Icon
      </Chip>
      <Chip
        {...sharedProps}
        size="sm"
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        {...sharedProps}
        size="sm"
        iconOnly={<OtherFrame className="text-moon-24" />}
        aria-label="Single icon"
      />
    </div>
    <div className="flex flex-wrap items-center justify-start gap-2 w-full">
      <p>Medium:</p>
      <Chip {...sharedProps} iconLeft={<OtherFrame className="text-moon-24" />}>
        Left Icon
      </Chip>
      <Chip
        {...sharedProps}
        iconRight={<OtherFrame className="text-moon-24" />}
      >
        Right Icon
      </Chip>
      <Chip
        {...sharedProps}
        iconRight={<OtherFrame className="text-moon-24" />}
        iconLeft={<OtherFrame className="text-moon-24" />}
      >
        Left/Right Icons
      </Chip>
      <Chip
        {...sharedProps}
        iconOnly={<OtherFrame className="text-moon-24" />}
        aria-label="Single icon"
      />
    </div>
  </>
);

export default Example;
