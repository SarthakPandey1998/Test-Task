// src/redux/actions/userActions.js
export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const deleteUser = (userId) => ({
  type: "DELETE_USER",
  payload: userId,
});

export const editUser = (userId) => ({
  type: "EDIT_USER",
  payload: userId,
});
