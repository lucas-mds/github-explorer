const myUser = {
  login: "lucas-mds",
  id: 26863142,
  node_id: "MDQ6VXNlcjI2ODYzMTQy",
  avatar_url: "https://avatars.githubusercontent.com/u/26863142?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/lucas-mds",
  html_url: "https://github.com/lucas-mds",
  followers_url: "https://api.github.com/users/lucas-mds/followers",
  following_url:
    "https://api.github.com/users/lucas-mds/following{/other_user}",
  gists_url: "https://api.github.com/users/lucas-mds/gists{/gist_id}",
  starred_url: "https://api.github.com/users/lucas-mds/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/lucas-mds/subscriptions",
  organizations_url: "https://api.github.com/users/lucas-mds/orgs",
  repos_url: "https://api.github.com/users/lucas-mds/repos",
  events_url: "https://api.github.com/users/lucas-mds/events{/privacy}",
  received_events_url: "https://api.github.com/users/lucas-mds/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  score: 1,
};

export const items = [myUser, { ...myUser, id: 123, login: "foo-bar" }];
