import { useMemo } from "react";
import packageInfo from "../../package.json";

const Version = ({ packageName }: { packageName: string }) => {
  const packageVersion = useMemo(
    () =>
      packageInfo.dependencies[
        packageName as keyof typeof packageInfo.dependencies
      ],
    [packageName],
  );
  const packageVersionFormatted = useMemo(
    () => new RegExp(/(\d+\.\d+\.\d+)$/).exec(packageVersion),
    [packageVersion],
  );
  if (!packageVersionFormatted) {
    return null;
  }
  return (
    <span className="text-moon-14 text-trunks">
      v{packageVersionFormatted[0]}
    </span>
  );
};

export default Version;
