import React, {
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  MutableRefObject,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import type BottomSheetRootProps from "./private/types/BottomSheetRootProps";
import type DraghandleProps from "./private/types/DraghandleProps";
import type PanelProps from "./private/types/PanelProps";
import type TitleProps from "./private/types/TitleProps";
import BottomSheetContext, {
  useBottomSheetContext,
} from "./private/utils/context";
import stateReducer from "./private/utils/stateReducer";
import useDrag from "./private/utils/useDrag";
import Backdrop from "../backdrop/Backdrop";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const BottomSheetRoot = ({
  open,
  onClose,
  hasShadow, // deprecated
  size, // deprecated
  children,
  className,
  rootId,
  initialFocus,
  ...rest
}: BottomSheetRootProps) => {
  const defFocus = useRef(null);
  const [focusElRef, setFocusElRef] =
    useState<MutableRefObject<HTMLElement | null>>();

  useEffect(() => {
    initialFocus ? setFocusElRef(initialFocus) : setFocusElRef(defFocus);
  }, [initialFocus]);

  const [state, dispatch] = useReducer(stateReducer, {
    bottomSheetChildren: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch?.({ type: "RegisterChild", children: child });
    return () => dispatch?.({ type: "UnregisterChild", children: child });
  }, []);

  const onCloseHandler = () => {
    if (!onClose) return;
    onClose();
  };

  useEffect(() => {
    if (!rootId) return;
    if (open) {
      setTimeout(() => {
        const rootNode = document.getElementById(rootId);
        if (rootNode) rootNode.inert = false;
      }, 100);
    }
  }, [open]);

  return (
    <BottomSheetContext.Provider
      value={{ ...state, size, registerChild, dispatch }}
    >
      <Transition appear show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className={mergeClassnames("fixed inset-0 z-50", className)}
          onClose={onCloseHandler}
          initialFocus={focusElRef}
          {...rest}
        >
          {React.Children.map<ReactNode, ReactNode>(children, (child) => {
            if (React.isValidElement(child)) {
              let extraProps = {};
              if (
                typeof child.type !== "string" &&
                child.type.name === "Panel"
              ) {
                extraProps = !onClose ? { hasShadow } : { onClose, hasShadow };
              }
              return React.cloneElement(child, extraProps);
            }
            return null;
          })}
        </Dialog>
      </Transition>
    </BottomSheetContext.Provider>
  );
};

const Panel = ({
  children,
  className,
  hasShadow, // deprecated
  onClose,
}: PanelProps) => {
  const { size, bottomSheetChildren } =
    useBottomSheetContext("BottomSheet.Panel"); // deprecated
  const isDraggable = bottomSheetChildren?.find(
    (name) => name === "Draghandle",
  );
  const {
    isTransition, // deprecated
    panelRef,
    clickOutsideClose,
  } = useDrag(onClose, isDraggable);
  let height;
  switch (size) {
    case "lg":
      height = "h-[88%]";
      break;
    case "sm":
      height = "h-[32%]";
      break;
    case "md":
      height = "h-[64%]";
      break;
    default:
      height = undefined;
  }
  return (
    <Transition.Child
      beforeLeave={() => {
        clickOutsideClose();
      }}
      as={React.Fragment}
      enter="ease-out duration-300 transition-transform"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="ease-in duration-200 transition-transform"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
    >
      <Dialog.Panel
        className={mergeClassnames(
          "absolute flex flex-col inset-x-0 bottom-0 rounded-t-12 bg-primary p-space-8 h-1/3",
          height, // deprecated
          hasShadow && "shadow-400", // deprecated
          isTransition && "duration-200 transition-all", // deprecated
          className,
        )}
        ref={panelRef}
      >
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
};

const Draghandle = ({ children, className }: DraghandleProps) => {
  const { registerChild, draghandleRef } = useBottomSheetContext(
    "BottomSheet.Draghandle",
  );
  useEffect(() => {
    registerChild?.("Draghandle");
  }, [registerChild]);
  return (
    <div
      className={mergeClassnames(
        "relative flex items-center justify-center pb-space-8 after:absolute after:-top-space-4",
        "after:left-1/2 after:rounded-full after:-translate-x-1/2 after:w-space-40 after:h-space-4",
        "after:bg-tertiary [&_.bottomsheet-title]:pt-space-8",
        className,
      )}
      ref={draghandleRef}
    >
      {children}
    </div>
  );
};

const Title = ({ children, className }: TitleProps) => (
  <Dialog.Title
    as="p"
    className={mergeClassnames(
      "bottomsheet-title text-body-400 text-primary font-medium text-center",
      className,
    )}
  >
    {children}
  </Dialog.Title>
);

const BottomSheet = Object.assign(BottomSheetRoot, {
  Backdrop,
  Draghandle,
  Title,
  Panel,
});

export default BottomSheet;
