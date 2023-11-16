import { gql } from '@apollo/client'

/**
 * A GraphQL query to fetch a user's details and their repositories.
 * The user is identified by their login.
 * The repositories are ordered by the number of stargazers in descending order.
 * @type {DocumentNode}
 */
export const GET_GITHUB = gql`
    query GetGithub($login: String!) {
      user(login: $login) {
        name
        bioHTML
        avatarUrl
        login
        repositories(
          first: 100
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          edges {
            node {
              name
              descriptionHTML
              url
              stargazerCount
              updatedAt
              primaryLanguage {
                color
                name
              }
            }
          }
        }
      }
    }
  `
