"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { mergeClassnames } from "@heathmont/moon-base-tw";
import ToggleCodeBtn from "./ToggleCodeBtn";
import CodeCopy from "../CodeCopy";

const CodePreviewWrapper = ({
  children,
  code,
}: {
  children?: React.ReactNode;
  code: string;
}) => {
  const [expand, setExpand] = useState(false);
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

  // Remove "use client" from NextJS in the example
  const cleanChildren = useMemo(() => {
    if (
      React.Children.toArray(children).length !== 1
      || !React.isValidElement(children)
    ) {
      // In case we have different number of children, return children
      return children;
    } else {
      const c = React.cloneElement((children as React.ReactElement), {
        ...((children as React.ReactElement)?.props || {}),
        children: (children as React.ReactElement).props.children.replace(`"use client"\n\n`, '')
      })
      return c;
    }
  }, [children])

  return (
    <div
      ref={wrapperRef}
      className={mergeClassnames(
        "relative text-bulma p-4 pb-0 md:pe-12 overflow-hidden border border-t-0 border-beerus rounded-b-moon-s-sm"
      )}
    >
      <div
        className={mergeClassnames(
          "max-h-32 transition-[max-height] ease-in-out overflow-hidden overflow-x-scroll pb-10 pt-10 md:pt-0",
          expand && "max-h-96 overflow-scroll"
        )}
      >
        {cleanChildren}
      </div>
      <CodeCopy code={code} />
      {height > 72 && (
        <ToggleCodeBtn expand={expand} clickHandler={clickHandler} />
      )}
    </div>
  );
};

export default CodePreviewWrapper;
