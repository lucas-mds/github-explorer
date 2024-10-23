import { Octokit } from "octokit";

const octokit = new Octokit({
  throttle: {
    enabled: false,
  },
});

export default octokit;
