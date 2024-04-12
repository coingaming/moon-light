import { useMemo } from "react";
import packageInfo from "../../package.json";

const versionRegex = /(\d+\.\d+\.\d+)$/;

const Version = ({ packageName }: { packageName: string }) => {
  const packageVersion = useMemo(
    () =>
      packageInfo.dependencies[
        packageName as keyof typeof packageInfo.dependencies
      ],
    [packageName],
  );
  const packageVersionFormatted = useMemo(
    () => new RegExp(versionRegex).exec(packageVersion),
    [packageVersion],
  );
  if (!packageVersionFormatted) {
    return null;
  }
  return (
    <span className="text-moon-10-caption font-medium text-trunks">
      {packageVersionFormatted[0]}
    </span>
  );
};

export default Version;
