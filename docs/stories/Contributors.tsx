import React from "react";
import { useState } from "react";
import { useEffect } from "react";

type Contributor = {
  id: number;
  avatar_url: string;
  html_url: string;
};

const getContributorsData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/coingaming/moon-light/contributors",
      {
        headers: {
          Authorization: `Bearer ${process.env.STORYBOOK_GITHUB_TOKEN}`,
        },
      },
    );

    return await response.json();
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
  }
};

const Contributors = () => {
  const contributorData = getContributorsData();
  const [contributors, setContributors] = useState<Array<Contributor> | null>(
    null,
  );
  useEffect(() => {
    contributorData.then((data) => {
      setContributors(data);
    });
  }, [contributorData]);

  return (
    <div className="flex">
      {contributors &&
        contributors.map((contributor) => (
          <React.Fragment key={contributor.id}>
            <a
              href={contributor.html_url}
              className="w-32 h-32"
              target="_blank"
            >
              <img src={contributor.avatar_url} className="rounded-full" />
            </a>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Contributors;
