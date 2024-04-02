import { useEffect, useState } from "react";
import type ContributorsProps from "../types/ContributorsProps";
import fetchContributors from "./fetchContributors";

const useContributors = () => {
  const TOP = 3;
  const [contributors, setContributors] = useState<ContributorsProps[]>([]);
  useEffect(() => {
    fetchContributors()
      .then((data) => setContributors(data))
      .catch((error) => console.error(error));
  }, []);
  const contributorsFiltered = contributors.filter(
    (contributor) => contributor.login !== "dependabot[bot]",
  );
  const contributorsList = contributorsFiltered.sort(
    (a, b) => b.contributions - a.contributions,
  );
  const topContributors = contributorsList.slice(0, TOP);
  const otherContributors = contributorsList.slice(TOP);
  const title =
    otherContributors.length >= 1 ? "Our top contributors" : "Our contributors";
  return {
    topContributors,
    otherContributors,
    title,
  };
};

export default useContributors;
