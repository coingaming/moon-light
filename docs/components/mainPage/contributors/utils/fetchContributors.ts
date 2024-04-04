const contributorsUrl =
  "https://api.github.com/repos/coingaming/moon-light/contributors";

async function fetchContributors() {
  try {
    const response = await fetch(contributorsUrl);
    return response.json();
  } catch (error) {
    throw error;
  }
}

export default fetchContributors;
