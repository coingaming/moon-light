import { useEffect, useRef, useState } from "react";
import { CellCopyTextOuputType } from "../types/CellCopy";
const TOOLTIP_TIME_OUT = 850;

export const useCellCopyText = (): CellCopyTextOuputType => {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [wasCopiedSuccess, setWasCopiedSuccess] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const timeoutTooltip = useRef<number | null>(null);

  useEffect(() => {
    if (!copied) {
      return;
    }

    (async () => {
      try {
        if (textRef?.current) {
          await navigator?.clipboard.writeText(textRef.current.innerText);
          setWasCopiedSuccess(true);

          if (timeoutTooltip?.current) {
            clearTimeout(timeoutTooltip.current);
          }

          timeoutTooltip.current = setTimeout(
            () => setWasCopiedSuccess(false),
            TOOLTIP_TIME_OUT,
          );
        }
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    })();

    setCopied(false);

    return () => {
      if (timeoutTooltip?.current && !copied) {
        clearTimeout(timeoutTooltip.current);
      }
    };
  }, [copied]);

  const mouseEnterHandler = () => {
    setMouseEnter(true);
  };

  const mouseLeaveHandler = () => {
    setMouseEnter(false);
  };

  const onClickHandler = () => {
    setCopied(true);
  };

  return {
    wasCopiedSuccess,
    mouseEnterHandler,
    mouseLeaveHandler,
    mouseEnter,
    textRef,
    onClickHandler,
  };
};
