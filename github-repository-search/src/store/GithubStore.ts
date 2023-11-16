import { create } from 'zustand'
import { type UserActions } from '../interfaces/actions/UserActions'
import { type UserState } from '../interfaces/states/UserState'

export const useGithubStore = create<UserState & UserActions>((set) => ({
  name: '',
  bioHTML: '',
  avatarUrl: '',
  login: '',
  repositories: { edges: [] },
  updateUser: (user) => { set(() => ({ ...user })) }
}))
