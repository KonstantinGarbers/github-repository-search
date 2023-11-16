import { type UserState } from '../states/UserState'

export interface UserActions {
  updateUser: (user: UserState) => void
}
