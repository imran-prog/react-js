// Creating User Actions
export const setCurrentUser = (user) => {
  return {
    type: "Set_Current_User",
    payload: user,
  };
};
