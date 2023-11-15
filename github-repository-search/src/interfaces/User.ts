import { RepositoryEdge } from "./RepositoryEdge";

interface User {
  __typename: string;
  name: string;
  bioHTML: string;
  repositories: {
    __typename: string;
    edges: RepositoryEdge[];
  };
}
