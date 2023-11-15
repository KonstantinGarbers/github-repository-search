import { UserState } from "./UserState";

export interface UserActions {
    updateUser: (user: UserState) => void;
}