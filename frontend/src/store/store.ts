import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { auth } from "./slices/authSlice/auth";
import { physical } from "./slices/physicalSlice/physical";
import { user } from "./slices/userSlice/user";

export const store = configureStore({
  reducer: {
    auth: auth,
    user: user,
    physical: physical,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;
