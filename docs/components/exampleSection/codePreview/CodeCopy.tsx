import { useState, useCallback } from "react";
import IconButton from "@heathmont/moon-core-tw/lib/es/iconButton/IconButton";
import Snackbar from "@heathmont/moon-core-tw/lib/es/snackbar/Snackbar";
import { FilesCopy, GenericCheckAlternative } from "@heathmont/moon-icons-tw";
import { mergeClassnames } from "@heathmont/moon-base-tw";

const CodeCopy = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  const [snackbar, setSnackbar] = useState("");

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar("");
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar],
  );

  const copyCode = () => {
    try {
      if (!code) {
        console.info("Attempted to copy, but the code is empty.");
        return;
      }

      if (navigator?.clipboard) {
        navigator.clipboard.writeText(code);
        openSnackbarHandler("top-right");
      }
    } catch (error) {
      console.error("Error occurred while copying code: ", error);
    }
  };

  return (
    <div>
      <span className="absolute top-2 right-2 cursor-pointer z-1">
        <IconButton
          onClick={copyCode}
          variant="ghost"
          icon={
            <FilesCopy className={mergeClassnames("text-bulma", className)} />
          }
        />
      </span>
      <Snackbar
        isOpen={snackbar === "top-right"}
        onOpenChange={setSnackbar}
        position="top-right"
      >
        <Snackbar.Message className="flex gap-2">
          <GenericCheckAlternative className="text-moon-24 text-roshi" />
          Copied
        </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default CodeCopy;
