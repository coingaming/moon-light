import ReviewCard from "./ReviewCard";
import COMPONENTS from "@/components.constants.mjs";
import componentDescriptions from "@/generated/componentDescriptions";

const Review = () => {
  const descriptions = componentDescriptions as { [key: string]: string };
  return (
    <>
      <h2 className="text-heading-400 max-w-3xl text-primary">
        Accelerate your development journey with moon components.
      </h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 2xl:grid-cols-3 auto-rows-auto w-full gap-x-space-20 gap-y-space-20">
        {Object.keys(COMPONENTS).map((componentKey, index) => {
          const { title } = COMPONENTS[componentKey as keyof typeof COMPONENTS];
          return (
            <ReviewCard
              key={index}
              title={title}
              component={componentKey}
              description={descriptions[componentKey]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Review;
