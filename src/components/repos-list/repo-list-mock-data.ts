import { RepositoriesResponse } from "@/hooks/use-search-user-repositories";

export const repos = [
  {
    id: 1,
    name: "Repo 1",
    svn_url: "foo",
  },
  {
    id: 2,
    name: "Repo 2",
    svn_url: "bar",
  },
] as RepositoriesResponse;
