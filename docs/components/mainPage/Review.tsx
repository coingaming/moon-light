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
        <ReviewCard name="Button" filename="button" />
        <ReviewCard name="Carousel" filename="carousel" />
        <ReviewCard name="Checkbox" filename="checkbox" />
        <ReviewCard name="Chip" filename="chip" />
        <ReviewCard name="CircularProgress" filename="circularProgress" />
        <ReviewCard name="Combobox" filename="combobox" />
        <ReviewCard name="Drawer" filename="drawer" />
        <ReviewCard name="Dropdown" filename="dropdown" />
        <ReviewCard name="Form" filename="form" />
        <ReviewCard name="Group" filename="group" />
        <ReviewCard name="IconButton" filename="iconbutton" />
        <ReviewCard name="Icons" filename="icons" />
        <ReviewCard name="Input" filename="input" />
        <ReviewCard name="InsetInput" filename="insetInput" />
        <ReviewCard name="InsetNativeSelect" filename="insetnativeselect" />
        <ReviewCard name="Loader" filename="loader" />
        <ReviewCard name="MenuItem" filename="menuItem" />
        <ReviewCard name="Modal" filename="modal" />
        <ReviewCard name="NativeSelect" filename="nativeselect" />
        <ReviewCard name="Pagination" filename="pagination" />
        <ReviewCard name="Popover" filename="popover" />
        <ReviewCard name="Progress" filename="progress" />
        <ReviewCard name="Radio" filename="radio" />
        <ReviewCard name="Search" filename="search" />
        <ReviewCard name="SearchCmdk" filename="searchCmdk" />
        <ReviewCard name="Snackbar" filename="snackbar" />
        <ReviewCard name="Switch" filename="switch" />
        <ReviewCard name="Table" filename="table" />
        <ReviewCard name="Tabs" filename="tabs" />
        <ReviewCard name="Tag" filename="tag" />
        <ReviewCard name="TagsInput" filename="tagsInput" />
        <ReviewCard name="Textarea" filename="textarea" />
      </div>
    </>
  );
}

export default Review;
