import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";

const octokit = new Octokit();

const fetchUsers = async (query: string) => {
  const data = await octokit.request("GET /search/users", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    q: query,
  });

  return data;
};

const useSearchUsers = (query: string) => {
  return useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchUsers(query),
  });
};

export default useSearchUsers;
