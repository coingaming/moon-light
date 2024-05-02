import { MDX } from "@/components/MDX";
import ColorSet from "./ColorSet";

const SUPPORTIVE_COLORS = {
  krillin: ["bg-krillin", "bg-krillin-60", "bg-krillin-10"],
  chichi: ["bg-chichi", "bg-chichi-60", "bg-chichi-10"],
  roshi: ["bg-roshi", "bg-roshi-60", "bg-roshi-10"],
  dodoria: ["bg-dodoria", "bg-dodoria-60", "bg-dodoria-10"],
  cell: ["bg-cell", "bg-cell-60", "bg-cell-10"],
  raditz: ["bg-raditz", "bg-raditz-60", "bg-raditz-10"],
  whis: ["bg-whis", "bg-whis-60", "bg-whis-10"],
  frieza: ["bg-frieza", "bg-frieza-60", "bg-frieza-10"],
  nappa: ["bg-nappa", "bg-nappa-60", "bg-nappa-10"],
};

const DESCRIPTION =
  "Every HEX color in all supportive colors is represented by three shades. The difference between shades is in their transparency levels. Some colors may have a semantic purpose. `krillin` is usually used for warnings, `chichi` for errors, and `roshi` for success colors. Other colors are used for variety of secondary reasons.";

const SupportiveColors = () => (
  <div className="max-w-3xl flex flex-col w-full gap-6">
    <h2 className="text-moon-24 font-medium">Supportive colors</h2>
    <div className="flex flex-col gap-4 text-moon-16 text-bulma">
      <MDX markdown={DESCRIPTION} />
    </div>
    <ColorSet colors={SUPPORTIVE_COLORS} />
  </div>
);

export default SupportiveColors;
