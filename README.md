### Description

This project is a challenge and study case that integrates with the Github API to search for users and their repositories.

It was made with:

- Typescript
- NextJs
- Tailwind
- Material UI
- Tanstack/react-query
- Octokit
- Zustand
- Jest
- Cypress

## Getting Started

First, install the dependencies:

```bash
yarn install
# or
npm install
```

Then, you can run:

```bash
yarn dev
# or
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##### API rate limit

Github API can be used without authentication, but it has a lower rate limit. You can increase your limit by using a fine-grained access token. You can create one [here](https://github.com/settings/tokens?type=beta) and add it in the app UI.
