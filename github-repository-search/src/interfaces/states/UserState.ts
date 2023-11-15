import { RepositoryEdge } from "../RepositoryEdge";

export interface UserState {
  name: string;
  bioHTML: string;
  avatarUrl: string;
  login: string;
  repositories: {
    edges: RepositoryEdge[];
  };
}