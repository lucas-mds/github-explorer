import { useInfiniteQuery } from "@tanstack/react-query";
import octokit from "@/utils/octokit";
import getNextPageParameter from "@/utils/get-next-page-parameter";

export type Item = {
  id: number;
  name: string;
  svn_url: string;
  stargazers_count: number;
  description: string;
};

export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

const fetchUserRepositories = async (
  username: string,
  page: number | undefined
) => {
  const response = await octokit.request(`GET /users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    page,
    per_page: 5,
  });

  const nextPage = getNextPageParameter(response.headers);

  return { nextPage, items: response.data as Item[] };
};

const useSearchUserRepositories = (username: string, open: boolean) => {
  return useInfiniteQuery({
    queryKey: ["repositories", username],
    queryFn: ({ pageParam }) => fetchUserRepositories(username, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: !!username && open,
    initialPageParam: 1,
    retry: false,
  });
};

export default useSearchUserRepositories;
