import axios from "axios";

const contributorsUrl =
  "https://api.github.com/repos/coingaming/moon-light/contributors";

async function fetchContributors() {
  if (!contributorsUrl) {
    throw new Error("GITHUB_CONTRIBUTORS_URL is not defined");
  }
  try {
    const response = await axios.get(contributorsUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default fetchContributors;
