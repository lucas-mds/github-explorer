import { useQuery } from "@tanstack/react-query";
import octokit from "@/utils/octokit";

const fetchUsers = async (query: string) => {
  const response = await octokit.request("GET /search/users", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    q: query,
  });

  return response.data;
};

const useSearchUsers = (query: string) => {
  return useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchUsers(query),
    enabled: !!query,
  });
};

export default useSearchUsers;
