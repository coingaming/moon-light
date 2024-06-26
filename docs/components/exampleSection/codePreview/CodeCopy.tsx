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
        className="theme-moon-dark absolute top-2 end-2 z-1 bg-gohan"
      />
      <Snackbar
        isOpen={snackbar === "isOpen"}
        onOpenChange={setSnackbar}
        position="bottom-center"
        autoClose={3000}
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
