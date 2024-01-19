"use client";

import { IconButton } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Animations = () => (
  <>
    <IconButton
      animation="progress"
      icon={<OtherFrame />}
      onClick={() => alert("progress click")}
      data-testid="button-progress"
    />
    <IconButton
      animation="success"
      icon={<OtherFrame />}
      onClick={() => alert("success click")}
      data-testid="button-success"
    />
    <IconButton
      animation="error"
      icon={<OtherFrame />}
      onClick={() => alert("error click")}
      data-testid="button-error"
    />
    <IconButton
      animation="pulse"
      icon={<OtherFrame />}
      onClick={() => alert("pulse click")}
      data-testid="button-pulse"
    />
  </>
);

export default Animations;
