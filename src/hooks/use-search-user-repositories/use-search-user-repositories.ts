import { useQuery } from "@tanstack/react-query";
import octokit from "@/utils/octokit";

export type RepositoryResponse = {
  id: number;
  name: string;
  svn_url: string;
  stargazers_count: number;
  description: string;
};

const fetchUserRepositories = async (username: string) => {
  const response = await octokit.request(`GET /users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
};

const useSearchUserRepositories = (username: string) => {
  return useQuery<RepositoryResponse[]>({
    queryKey: ["repositories", username],
    queryFn: () => fetchUserRepositories(username),
    enabled: !!username,
  });
};

export default useSearchUserRepositories;
