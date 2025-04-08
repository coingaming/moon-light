import { useState, useCallback } from "react";
import { IconButton, Snackbar } from "@heathmont/moon-core-tw";
import { FilesCopy, GenericCheckAlternative } from "@heathmont/moon-icons-tw";

const CodeCopy = ({ code }: { code: string }) => {
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
        openSnackbarHandler("isOpen");
      }
    } catch (error) {
      console.error("Error occurred while copying code: ", error);
    }
  };

  return (
    <div>
      <IconButton
        onClick={copyCode}
        variant="outline"
        icon={<FilesCopy />}
        className="dark-theme absolute top-space-8 end-space-8 z-1 bg-secondary"
      />
      <Snackbar
        isOpen={snackbar === "isOpen"}
        onOpenChange={setSnackbar}
        position="bottom-center"
        autoClose={3000}
      >
        <Snackbar.Message className="flex gap-space-8">
          <GenericCheckAlternative className="text-body-500 text-positive" />
          Copied
        </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default CodeCopy;
