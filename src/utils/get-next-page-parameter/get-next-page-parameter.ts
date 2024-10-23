import { ResponseHeaders } from "@octokit/types";

const getNextPageParameter = (responseHeader: ResponseHeaders) => {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  const linkHeader = responseHeader.link;
  const pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);
  let nextPage;

  if (pagesRemaining) {
    const url = linkHeader.match(nextPattern)?.[0];
    const urlParams = new URLSearchParams(new URL(url || "").search);
    nextPage = urlParams.get("page");
  }

  return nextPage ? parseInt(nextPage) : undefined;
};

export default getNextPageParameter;
