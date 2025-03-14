import { useEffect, useRef, useState } from "react";
import { CellCopyTextOutputType } from "../types/CellCopy";
const TOOLTIP_TIME_OUT = 700;

export const useCellCopyText = (): CellCopyTextOutputType => {
  const [wasCopiedSuccess, setWasCopiedSuccess] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const timeoutTooltip = useRef<number | null>(null);

  useEffect(() => {
    if (!wasCopiedSuccess) {
      return;
    }

    if (timeoutTooltip?.current) {
      clearTimeout(timeoutTooltip.current);
    }

    timeoutTooltip.current = setTimeout(
      () => setWasCopiedSuccess(false),
      TOOLTIP_TIME_OUT,
    );

    return () => {
      if (timeoutTooltip?.current && !wasCopiedSuccess) {
        clearTimeout(timeoutTooltip.current);
      }
    };
  }, [wasCopiedSuccess]);

  const onClickHandler = () => {
    (async () => {
      try {
        if (textRef?.current) {
          await navigator?.clipboard.writeText(textRef.current.innerText);
          setWasCopiedSuccess(true);
        }
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    })();
  };

  return {
    wasCopiedSuccess,
    textRef,
    onClickHandler,
  };
};
