import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getTokenLocalStorage } from "../../../utils/getTokenLocalStorage";
import { login } from "./authAsyncThunks";
import { IAuth } from "./authDataType";

const tokenData = getTokenLocalStorage();

const initialState: IAuth = {
  isLoggedIn: tokenData?.token ? true : false,
  accessToken: tokenData?.token ? tokenData?.token : null,
  role: tokenData?.role ? tokenData?.role : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (_, action) => {
        toast.error(action.payload as string);
      });
  },
});

export const auth = authSlice.reducer;

export const { setToken, logout } = authSlice.actions;
