import { useMemo } from "react";
import packageInfo from "../../package.json";

type Props = {
  packageName: string;
};

const versionRegex = /(\d+\.\d+\.\d+)$/;

const useVersion = ({ packageName }: Props) => {
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
  return packageVersionFormatted ? packageVersionFormatted[0] : null;
};

const Version = ({ packageName }: Props) => {
  const packageVersionFormatted = useVersion({ packageName });
  if (!packageVersionFormatted) {
    return null;
  }
  return (
    <span className="text-body-300 text-secondary">
      {packageVersionFormatted}
    </span>
  );
};

export default Version;
