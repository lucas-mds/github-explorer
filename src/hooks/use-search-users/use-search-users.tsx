import { useInfiniteQuery } from "@tanstack/react-query";
import octokit from "@/utils/octokit";
import getNextPageParameter from "@/utils/get-next-page-parameter";

const fetchUsers = async (query: string, page: number) => {
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
  return useInfiniteQuery({
    queryKey: ["users", query],
    queryFn: ({ pageParam }) => fetchUsers(query, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    enabled: !!query,
  });
};

export default useSearchUsers;
