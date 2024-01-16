const ComponentPreview = ({ component }: { component: JSX.Element }) => (
  <div
    className={
      "relative flex flex-wrap items-center justify-around p-8 gap-2 min-h-[120px] w-full rounded-t-moon-s-sm border border-beerus bg-goku"
    }
  >
    {component}
  </div>
);

export default ComponentPreview;
