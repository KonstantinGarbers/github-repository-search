import { gql } from '@apollo/client'

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
