import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userType: "",
    userInfo: {},
    userTasks: [],
    userCompletedTasks: [],
    userConnectedChild: "",
  },
  reducers: {
    updateUserType(state, action) {
      state.userType = action.payload;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    updateTasks(state, action) {
      state.userTasks = action.payload;
    },
    deleteTask(state, action) {
      state.userTasks = state.userTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    updateUserConnectedChild(state, action) {
      state.userConnectedChild = action.payload;
    },
    addCompletedTasks(state, action) {
      state.action.push(action.payload);
    },
  },
});

export default UserSlice;
export const {
  updateUserType,
  updateUserInfo,
  updateTasks,
  updateUserConnectedChild,
  deleteTask,
  addCompletedTasks,
} = UserSlice.actions;
