import { useState, useCallback } from "react";
import IconButton from "@heathmont/moon-core-tw/lib/es/iconButton/IconButton";
import Snackbar from "@heathmont/moon-core-tw/lib/es/snackbar/Snackbar";
import { FilesCopy, GenericCheckAlternative } from "@heathmont/moon-icons-tw";

const CodeCopy = ({ code }: { code: string }) => {
  if (!window.isSecureContext) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [snackbar, setSnackbar] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    if (code && window.isSecureContext && navigator?.clipboard) {
      navigator.clipboard.writeText(code);
      openSnackbarHandler("top-right");
    }
  };
  return (
    <div>
      <span className="absolute top-2 right-2 cursor-pointer z-1">
        <IconButton
          onClick={copyCode}
          variant="ghost"
          icon={<FilesCopy className="text-bulma" />}
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
