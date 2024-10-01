import { GraphQLClient } from 'graphql-request';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN; // Store your access token in .env.local

export const githubClient = new GraphQLClient(GITHUB_API_URL, {
  headers: {
    Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  },
});

export async function fetchGitHubData(query) {
  return githubClient.request(query);
}
