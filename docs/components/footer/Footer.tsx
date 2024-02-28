const Footer = () => (
  <footer className="flex flex-col gap-4 pt-8 pb-6 lg:pb-12 items-center text-moon-14 text-bulma">
    <p>
      With the help of{" "}
      <a
        href="https://yolo.com/"
        className="hover:underline font-medium"
        target="_blank"
        rel="noreferrer"
      >
        Yolo Group
      </a>{" "}
      ❤️
    </p>
    <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center items-center text-trunks">
      <a
        href="https://github.com/coingaming/moon-design"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <span>•</span>
      <a
        href="https://www.figma.com/community/file/1002945721703152933"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Figma
      </a>
      <span>•</span>
      <a
        href="https://moonds.medium.com/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Medium
      </a>
      <span>•</span>
      <a
        href="https://www.linkedin.com/company/moon-io/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
