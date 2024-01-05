"use client";

import { Button } from "@heathmont/moon-core-tw";

const Animations = () => (
  <>
    <Button animation="progress" data-testid="progress">
      Progress
    </Button>
    <Button animation="success" data-testid="success">
      Success
    </Button>
    <Button animation="error" data-testid="error">
      Error
    </Button>
    <Button animation="pulse" data-testid="pulse">
      Pulse
    </Button>
  </>
);

export default Animations;
