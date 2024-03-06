const ComponentPreview = ({ component }: { component: JSX.Element }) => (
  <div
    className={
      "relative flex flex-wrap items-center justify-around p-4 gap-2 w-full rounded-t-lg border border-beerus bg-goku"
    }
  >
    {component}
  </div>
);

export default ComponentPreview;
