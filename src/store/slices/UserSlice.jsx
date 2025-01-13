import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log(state); //empty
      console.log(action); /** the action contain two thing one is PAYLOAD and another is TYPE */
      state.push(action.payload);
      console.log(state);
      console.log(action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export const { addUser, removeUser, deleteUsers } = UserSlice.actions;

export default UserSlice.reducer;
