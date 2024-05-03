type ColorType = {
  [key: string]: string[];
};

type Props = {
  colors: ColorType;
};

const ColorSet = ({ colors }: Props) =>
  Object.entries(colors).map(([colorSet, colorItems]) => (
    <div className="flex gap-4 items-start font-moon-16" key={colorSet}>
      {colorItems.map((colorItem) => {
        const title = colorItem.slice(3);
        return (
          <div
            key={colorItem}
            className="flex flex-col basis-1/2 lg:basis-32 gap-2 justify-center items-center"
          >
            <div
              className={`w-full h-32 rounded-moon-s-sm border border-beerus ${colorItem}`}
            />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  ));

export default ColorSet;
