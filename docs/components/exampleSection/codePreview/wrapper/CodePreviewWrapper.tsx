"use client";

import { useState, useEffect, useRef } from "react";
import { mergeClassnames } from "@heathmont/moon-base-tw";
import ToggleCodeBtn from "./ToggleCodeBtn";
import CodeCopy from "../CodeCopy";

const CodePreviewWrapper = ({
  children,
  code,
  className,
  expandedByDefault = false,
}: {
  children?: React.ReactNode;
  code?: string;
  className?: string;
  expandedByDefault?: boolean;
}) => {
  const [expand, setExpand] = useState<boolean>(expandedByDefault);
  const [height, setHeight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    if (wrapperRef) {
      setHeight(wrapperRef?.current?.querySelector("#code")?.clientHeight || 0);
    }
  }, []);
  return (
    <div
      ref={wrapperRef}
      className={mergeClassnames(
        "relative text-primary overflow-hidden border border-t-0 border-primary rounded-b-8",
        className,
      )}
    >
      <div
        className={mergeClassnames(
          "dark-theme max-h-space-128 transition-[max-height] ease-in-out overflow-hidden overflow-x-auto",
          expand && "max-h-96 overflow-auto",
        )}
      >
        {children}
      </div>
      {code && <CodeCopy code={code} />}
      {height > 72 && (
        <ToggleCodeBtn expand={expand} clickHandler={clickHandler} />
      )}
    </div>
  );
};

export default CodePreviewWrapper;
