import ReviewCard from "./ReviewCard";
import COMPONENTS from "@/components.constants.mjs";

const Review = () => {
  return (
    <>
      <h2 className="text-moon-56 font-medium max-w-3xl text-bulma">
        Accelerate your development journey with moon components.
      </h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 2xl:grid-cols-3 auto-rows-auto w-full gap-x-5 gap-y-5">
        {Object.keys(COMPONENTS).map((componentKey, index) => {
          const { title } = COMPONENTS[componentKey as keyof typeof COMPONENTS];
          return (
            <ReviewCard key={index} title={title} component={componentKey} />
          );
        })}
      </div>
    </>
  );
};

export default Review;
