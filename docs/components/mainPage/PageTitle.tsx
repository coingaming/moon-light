"use client";

import { Button } from "@heathmont/moon-core-tw";

const PageTitle = () => (
  <div className="flex flex-col items-start gap-6">
    <h1 className="text-moon-72 font-medium">Moon design system</h1>
    <p className="text-moon-24 max-w-3xl">
      Moon is Yolo Group product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </p>
    <p className="flex items-center gap-2 text-moon-16 font-medium">
      <span>Try out Moon DS for </span>
      <Button as="a" href="https://surface.moon.io/" target="_blank" size="sm">
        Elixir
      </Button>
    </p>
  </div>
);

export default PageTitle;
