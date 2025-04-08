import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col gap-space-16 pt-space-32 pb-space-24 lg:pb-space-48 items-center text-body-300 text-primary">
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
    <div className="flex gap-x-space-16 gap-y-space-8 flex-wrap justify-center items-center text-secondary">
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
        href="https://github.com/coingaming/moon-light/blob/main/LICENSE"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        License
      </Link>
    </div>
  </footer>
);

export default Footer;
