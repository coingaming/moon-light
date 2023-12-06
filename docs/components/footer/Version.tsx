import packageInfo from "../../package.json";

const Version = () => (
  <div className="flex text-moon-14 gap-2">
    MoonDS
    <p>
      Version <span className="font-medium">{packageInfo.version}</span>
    </p>
  </div>
);

export default Version;
