import { createContext } from "react";
import type ProgressState from "../types/ProgressState";

const ProgressContext = createContext<ProgressState>({});
ProgressContext.displayName = "ProgressContext";

export default ProgressContext;
