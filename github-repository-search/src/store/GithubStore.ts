import { create } from 'zustand'
import { type UserActions } from '../interfaces/actions/UserActions'
import { type UserState } from '../interfaces/states/UserState'

/**
 * A Zustand store for managing GitHub user data.
 * The store includes the user's name, bio, avatar URL, login, and repositories.
 * It also includes an action for updating the user.
 * @type {Store}
 */
export const useGithubStore = create<UserState & UserActions>((set) => ({
  name: '',
  bioHTML: '',
  avatarUrl: '',
  login: '',
  repositories: { edges: [] },
  updateUser: (user) => { set(() => ({ ...user })) }
}))
