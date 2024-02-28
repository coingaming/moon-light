import packageInfo from "../../package.json";

const Version = () => (
  <p className="text-moon-14 text-trunks">{packageInfo.version}</p>
);

export default Version;
