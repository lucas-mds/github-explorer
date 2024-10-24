[Github Explorer hosted on Vercel](https://github-explorer-beryl-psi.vercel.app)

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
- Vercel

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

#

#### Tests

Cypress is testing the main use case fof searching for an user and listing their repositories. As long as the dialog to add a token.

To run it:

```bash
#start the project
yarn run
#run the tests
yarn e2e:chrome

#alternatively you can start Cypress dashboard and run it from there
npx cypress open
```

##

Jest is covering some of the core components, **Button, RepoList and UsersList**, with unit tests.

To verify them, run:

```bash
yarn test
```

##### API rate limit

Github API can be used without authentication, but it has a lower rate limit. You can increase your limit by using a fine-grained access token. You can create one [here](https://github.com/settings/tokens?type=beta) and add it in the app UI.
