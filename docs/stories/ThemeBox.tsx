import React from "react";

const ThemeBox = ({ theme }: { theme: string }) => {
  return (
    <div>
      <div
        className="w-32 h-32 shadow-moon-sm rounded"
        style={{
          background: `rgb(var(--${theme}))`,
        }}
      ></div>
      <div className="text-moon-24">{theme}</div>
    </div>
  );
};

const ThemesList = ({ themes }: { themes: string[] }) =>
  themes.map((theme) => <ThemeBox theme={theme} />);

export default ThemesList;
