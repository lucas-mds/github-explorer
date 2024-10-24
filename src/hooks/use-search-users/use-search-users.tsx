import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import getNextPageParameter from "@/utils/get-next-page-parameter";
import useOctokit from "../user-octokit";

export type UsersResponse =
  Endpoints["GET /search/users"]["response"]["data"]["items"];

const fetchUsers = async (query: string, page: number, octokit: Octokit) => {
  const response = await octokit.request("GET /search/users", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    q: query,
    per_page: 5,
    page,
  });

  const nextPage = getNextPageParameter(response.headers);

  return {
    ...response.data,
    nextPage,
  };
};

const useSearchUsers = (query: string) => {
  const octokit = useOctokit();

  return useInfiniteQuery({
    queryKey: ["users", query],
    queryFn: ({ pageParam }) => fetchUsers(query, pageParam, octokit),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    enabled: !!query,
    retry: false,
  });
};

export default useSearchUsers;
