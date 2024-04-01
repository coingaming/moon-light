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
        "theme-moon-dark absolute bottom-0 inset-x-0 h-32 flex items-end z-0 bg-gradient-to-b from-25% from-transparent to-gohan",
        expand && "h-10",
      )}
    >
      <Button
        onClick={clickHandler}
        variant="ghost"
        fullWidth
        className="active:scale-100 bg-gohan"
        iconRight={
          <ControlsChevronDownSmall
            className={mergeClassnames("text-moon-24", expand && "rotate-180")}
          />
        }
      >
        {expand ? "Collapse code" : "Expand code "}
      </Button>
    </div>
  );
};

export default ToggleCodeBtn;
