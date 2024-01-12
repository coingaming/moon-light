"use client";

import { Snackbar, Button } from "@heathmont/moon-core-tw";
import { useState, useCallback } from "react";

const Default = () => {
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

  return (
    <div>
      <Button variant="outline" onClick={() => openSnackbarHandler("default")}>
        Default
      </Button>
      <Snackbar isOpen={snackbar === "default"} onOpenChange={setSnackbar}>
        <Snackbar.Message>Snackbar message</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Default;
