import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <>
      <h2 className="text-moon-56 font-medium max-w-3xl text-bulma">
        Build the best products faster
      </h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 2xl:grid-cols-3 auto-rows-auto w-full gap-x-5 gap-y-5">
        <ReviewCard name="Accordion" filename="accordion" />
        <ReviewCard name="Alert" filename="alert" />
        <ReviewCard name="AuthCode" filename="authcode" />
        <ReviewCard name="Avatar" filename="avatar" />
        <ReviewCard name="BottomSheet" filename="bottomSheet" />
        <ReviewCard name="Breadcrumb" filename="breadcrumb" />
      </div>
    </>
  );
}

export default Review;
