import { Octokit } from "octokit";
import useApiTokenStore from "../use-api-token-store";

const useOctokit = () => {
  const { apiToken } = useApiTokenStore();

  const octokit = new Octokit({
    auth: apiToken,
    throttle: {
      enabled: false,
    },
  });

  return octokit;
};

export default useOctokit;
