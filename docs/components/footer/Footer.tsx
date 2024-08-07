import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col gap-4 pt-8 pb-6 lg:pb-12 items-center text-moon-14 text-bulma">
    <p>
      With the help of the{" "}
      <Link
        href="https://yolo.com/"
        className="hover:underline font-medium"
        target="_blank"
        rel="noreferrer"
      >
        Yolo Group
      </Link>{" "}
      ❤️
    </p>
    <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center items-center text-trunks">
      <Link
        href="https://github.com/coingaming/moon-light"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Link>
      <span>•</span>
      <Link
        href="https://www.figma.com/community/file/1002945721703152933"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Figma
      </Link>
      <span>•</span>
      <Link
        href="https://moonds.medium.com/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Medium
      </Link>
      <span>•</span>
      <Link
        href="https://www.linkedin.com/company/moon-io/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </Link>
      <span>•</span>
      <Link
        href="https://github.com/coingaming/moon-light/blob/main/COPYING"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Copyright
      </Link>
    </div>
  </footer>
);

export default Footer;
