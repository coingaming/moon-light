import { useEffect, useMemo, useState } from "react";
import type ContributorsProps from "../types/ContributorsProps";
import fetchContributors from "./fetchContributors";

const useContributors = () => {
  const TOP = 10;
  const [contributors, setContributors] = useState<ContributorsProps[]>([]);
  useEffect(() => {
    fetchContributors().then(setContributors).catch(console.error);
  }, []);
  const contributorsFiltered = useMemo(
    () =>
      contributors.filter(
        (contributor) => contributor.login !== "dependabot[bot]",
      ),
    [contributors],
  );
  const contributorsList = useMemo(
    () =>
      contributorsFiltered.sort((a, b) => b.contributions - a.contributions),
    [contributorsFiltered],
  );
  const topContributors = useMemo(
    () => contributorsList.slice(0, TOP),
    [contributorsList],
  );
  const otherContributors = useMemo(
    () => contributorsList.slice(TOP),
    [contributorsList],
  );
  const title = useMemo(
    () =>
      otherContributors.length >= 1
        ? "Our top contributors"
        : "Our contributors",
    [otherContributors],
  );
  return useMemo(
    () => ({
      topContributors,
      otherContributors,
      title,
    }),
    [topContributors, otherContributors, title],
  );
};

export default useContributors;
