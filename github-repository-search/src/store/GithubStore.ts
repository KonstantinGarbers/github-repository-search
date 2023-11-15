import { create } from "zustand";
import { UserActions } from "../interfaces/states/UserActions";
import { UserState } from "../interfaces/states/UserState";

export const useGithubStore = create<UserState & UserActions>((set) => ({
  name: "",
  bioHTML: "",
  avatarURL: "",
  repositories: { edges: [] },
  updateUser: (user) => set(() => ({ ...user})),
}))