import { RepositoryEdge } from "../RepositoryEdge";

export interface UserState {
  name: string;
  bioHTML: string;
  avatarURL: string;
  repositories: {
    edges: RepositoryEdge[];
  };
}