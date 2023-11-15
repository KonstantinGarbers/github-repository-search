import { UserState } from "../states/UserState";

export interface UserActions {
    updateUser: (user: UserState) => void;
}