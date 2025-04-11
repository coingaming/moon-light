import { Button, mergeClassnames } from "@heathmont/moon-base-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";

type Props = {
  expand?: boolean;
  clickHandler?: () => void;
};

const ToggleCodeBtn = ({ expand, clickHandler }: Props) => {
  return (
    <div
      className={mergeClassnames(
        "dark-theme absolute bottom-0 inset-x-0 h-space-128 flex items-end z-0 bg-gradient-to-b from-25% from-transparent to-gohan",
        expand && "h-space-40",
      )}
    >
      <Button
        onClick={clickHandler}
        variant="ghost"
        fullWidth
        className="active:scale-100 bg-tertiary"
        iconRight={
          <ControlsChevronDownSmall
            className={mergeClassnames(
              "text-heading-200",
              expand && "rotate-180",
            )}
          />
        }
      >
        {expand ? "Collapse code" : "Expand code "}
      </Button>
    </div>
  );
};

export default ToggleCodeBtn;
