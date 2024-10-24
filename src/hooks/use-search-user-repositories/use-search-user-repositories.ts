import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import getNextPageParameter from "@/utils/get-next-page-parameter";
import useOctokit from "../user-octokit";

export type RepositoriesResponse = ({
  isLastOfItsPage: boolean;
  hasNextPageItem: boolean;
} & Endpoints["GET /users/{username}/repos"]["response"]["data"][0])[];

export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

const fetchUserRepositories = async (
  username: string,
  page: number | undefined,
  octokit: Octokit
) => {
  const response = await octokit.request(`GET /users/${username}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    page,
    per_page: 100,
  });

  const nextPage = getNextPageParameter(response.headers);

  return { nextPage, items: response.data };
};

const useSearchUserRepositories = (username: string, open: boolean) => {
  const octokit = useOctokit();

  return useInfiniteQuery({
    queryKey: ["repositories", username],
    queryFn: ({ pageParam }) =>
      fetchUserRepositories(username, pageParam, octokit),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: !!username && open,
    initialPageParam: 1,
    retry: false,
  });
};

export default useSearchUserRepositories;
