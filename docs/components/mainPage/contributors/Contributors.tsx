"use client";

import useContributors from "./utils/useContributors";
import Card from "./Card";

const Contributors = () => {
  const { topContributors, otherContributors, title } = useContributors();
  return (
    <>
      {topContributors.length > 0 && (
        <>
          <h3 className="text-heading-400 max-w-3xl text-primary">{title}</h3>
          <div className="flex gap-space-16">
            {topContributors.map((contributor, i) => (
              <Card
                key={i}
                contributor={contributor}
                size={96}
                className="size-space-48"
              />
            ))}
          </div>
        </>
      )}
      {otherContributors.length > 0 && (
        <>
          <h4 className="text-heading-300 max-w-3xl text-primary">
            Other contributors
          </h4>
          <div className="flex gap-">
            {otherContributors.map((contributor, i) => (
              <Card
                key={i}
                contributor={contributor}
                size={64}
                className="size-space-32"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Contributors;
