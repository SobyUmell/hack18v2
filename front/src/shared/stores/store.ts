import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../store/userReducer";
import { taskReducer } from "../model";

const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
