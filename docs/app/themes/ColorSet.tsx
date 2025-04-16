type ColorType = {
  [key: string]: string[];
};

type Props = {
  colors: ColorType;
};

const ColorSet = ({ colors }: Props) =>
  Object.entries(colors).map(([colorSet, colorItems]) => (
    <div className="flex gap-space-16 items-start text-body-300" key={colorSet}>
      {colorItems.map((colorItem) => {
        const title = colorItem.slice(3);
        return (
          <div
            key={colorItem}
            className="flex flex-col basis-1/2 lg:basis-32 gap-space-8 justify-center items-center"
          >
            <div
              className={`w-full h-space-128 rounded-8 border border-primary ${colorItem}`}
            />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  ));

export default ColorSet;
