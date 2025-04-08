const ComponentPreview = ({ component }: { component: JSX.Element }) => (
  <div
    className={
      "relative flex flex-wrap items-center justify-around p-space-16 gap-space-8 w-full rounded-t-8 border border-primary bg-primary"
    }
  >
    {component}
  </div>
);

export default ComponentPreview;
