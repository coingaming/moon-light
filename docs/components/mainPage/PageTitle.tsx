"use client";

import { Button } from "@heathmont/moon-core-tw";

const PageTitle = () => (
  <div className="flex flex-col items-start gap-space-24">
    <h1 className="text-heading-500">Moon design system</h1>
    <p className="text-heading-200 max-w-3xl">
      Moon is Yolo Group product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </p>
    <p className="flex items-center gap-2 text-heading-100">
      <span>Try out Moon DS for </span>
      <Button as="a" href="https://surface.moon.io/" target="_blank" size="sm">
        Elixir
      </Button>
    </p>
  </div>
);

export default PageTitle;
