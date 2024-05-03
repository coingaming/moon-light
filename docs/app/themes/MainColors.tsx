import { MDX } from "@/components/MDX";
import ColorSet from "./ColorSet";

const MAIN_COLORS = {
  accent: ["bg-piccolo", "bg-hit"],
  border: ["bg-beerus"],
  background: ["bg-goku", "bg-gohan"],
  text: ["bg-bulma", "bg-trunks"],
  forced: ["bg-goten", "bg-popo"],
  overlay: ["bg-jiren", "bg-heles", "bg-zeno"],
};

const DESCRIPTION =
  "The main colors serve a specific purpose. `piccolo` and `hit` are used for accent colors; `beerus` for borders and lines; `goku` and `gohan` for backgrounds; `bulma` and `trunks` for text and icons; `goten` and `popo` for forced theme-less colors; and `jiren`, `heles`, and `zeno` for semi-transparent overlays.";

const MainColors = () => (
  <div className="max-w-3xl flex flex-col w-full gap-6">
    <h2 className="text-moon-24 font-medium">Main colors</h2>
    <div className="flex flex-col gap-4 text-moon-16 text-bulma">
      <MDX markdown={DESCRIPTION} />
    </div>
    <ColorSet colors={MAIN_COLORS} />
  </div>
);

export default MainColors;
