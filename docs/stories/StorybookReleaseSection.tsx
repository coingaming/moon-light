import { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const fetchGithubData = async (
  repository: string,
  fileRoute: string,
) => {
  const response = await fetch(
    `https://api.github.com/repos/coingaming/${repository}/contents/${fileRoute}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STORYBOOK_GITHUB_TOKEN}`,
      },
    },
  );

  return response;
};

const StorybookReleaseSection = () => {
  const [changelog, setChangelog] = useState<string>("Loading...");

  useEffect(() => {
    const repository = "moon-light";
    const fileRoute = "docs/CHANGELOG.md";

    fetchGithubData(repository, fileRoute)
      .then((response: any) => response.json())
      .then((data) => {
        const content = Buffer.from(data.content, "base64").toString("utf-8");
        setChangelog(content);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return <ReactMarkdown>{changelog}</ReactMarkdown>;
};

export default StorybookReleaseSection;
