import { ArrowsTopRight } from "@heathmont/moon-icons-tw";

const BetaBanner = () => (
  <div className="sticky top-0 z-50 text-center px-4 py-1 text-moon-14 bg-roshi-60 backdrop-blur-xl">
    Check out our new documentation website:{" "}
    <a
      href="https://beta.moon.io"
      target="_blank"
      className="inline-flex items-center gap-1 font-medium"
    >
      beta.moon.io
      <ArrowsTopRight className="text-moon-16" />
    </a>
  </div>
);

export default BetaBanner;
