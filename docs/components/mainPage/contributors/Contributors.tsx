"use client";

import useContributors from "./utils/useContributors";
import Card from "./Card";

const Contributors = () => {
  const { topContributors, otherContributors, title } = useContributors();
  return (
    <>
      <h3 className="text-moon-40 font-medium max-w-3xl text-bulma">{title}</h3>
      <div className="flex gap-2">
        {topContributors.map((contributor, i) => (
          <Card
            key={i}
            contributor={contributor}
            size={96}
            className="w-12 h-12"
          />
        ))}
      </div>
      {otherContributors.length >= 1 && (
        <>
          <h4 className="text-moon-32 font-medium max-w-3xl text-bulma">
            Other contributors
          </h4>
          <div className="flex gap-2">
            {otherContributors.map((contributor, i) => (
              <Card
                key={i}
                contributor={contributor}
                size={64}
                className="w-8 h-8"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Contributors;
