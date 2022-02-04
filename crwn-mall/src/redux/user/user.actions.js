import { userActionTypes } from "./user.types";

// Creating User Actions
export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.Set_Current_User,
    payload: user,
  };
};
