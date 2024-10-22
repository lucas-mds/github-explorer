import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";

const octokit = new Octokit();

const fetchUserRepositories = async (username: string) => {
  const response = await octokit.request(`GET /users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
};

const useSearchUserRepositories = (username: string) => {
  return useQuery({
    queryKey: ["repositories", username],
    queryFn: () => fetchUserRepositories(username),
    enabled: !!username,
  });
};

export default useSearchUserRepositories;
