import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import MainLayout from "@/components/mainLayout/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import Sizes from "./examples/Sizes";
import Captions from "./examples/Captions";
import Customization from "./examples/Customization";
import fs from "fs";
import { MDX } from "@/components/MDX";

const pageTitle = "Typography";
const pageDescription = "Typography includes text, headings, and captions.";

enum Examples {
  sizes = "sizes",
  captions = "captions",
  customization = "customization",
}

type Props = {
  title: { [key in Examples]: string };
  description: { [key in Examples]: JSX.Element };
  component: { [key in Examples]: JSX.Element };
  code: { [key in Examples]: string };
};

const examples: Props = {
  title: {
    sizes: "Sizes",
    captions: "Captions",
    customization: "Customization",
  },
  description: {
    sizes: (
      <MDX
        markdown={
          "To change font size, use one of the predefined class names such as `text-moon-XX`. Those class names include a combination of `font-size`, `line-height`, and `letter-spacing` properties where applicable."
        }
      />
    ),
    captions: (
      <MDX
        markdown={
          "By default, there are just two caption sizes with different `letter-spacing`, and are defined with `text-moon-XX-caption` class names. You also need to make them `uppercase`."
        }
      />
    ),
    customization: (
      <MDX
        markdown={
          "You can use any semantic HTML-tags. You may also need to change text `color` or `font-weight`."
        }
      />
    ),
  },
  component: {
    sizes: <Sizes />,
    captions: <Captions />,
    customization: <Customization />,
  },
  code: {
    sizes: fs.readFileSync("./app/typography/examples/Sizes.tsx").toString(),
    captions: fs
      .readFileSync("./app/typography/examples/Captions.tsx")
      .toString(),
    customization: fs
      .readFileSync("./app/typography/examples/Customization.tsx")
      .toString(),
  },
};

const TypographyPage = () => (
  <MainLayout>
    <div className="flex w-full max-w-7xl mx-auto flex-col gap-space-48 text-body-300 pb-space-40">
      <PageHeadComponent title={pageTitle} description={pageDescription} />
      {Object.keys(examples.title).map((exampleKey, index) => {
        const example = exampleKey as keyof typeof examples.title;
        return (
          <ExampleSection
            key={index}
            title={examples.title[example]}
            description={examples.description[example]}
            component={examples.component[example]}
            code={examples.code[example]}
          />
        );
      })}
    </div>
  </MainLayout>
);

export default TypographyPage;
