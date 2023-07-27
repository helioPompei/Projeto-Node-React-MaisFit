import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import { ILoginData } from "../../@types/LoginType";
import { toast } from "react-toastify";

const acessToken = localStorage.getItem("user");

interface IAuth {
  isLoggedIn: boolean;
  acessToken: string | null;
}

const initialState: IAuth = {
  isLoggedIn: acessToken ? true : false,
  acessToken: acessToken ? JSON.parse(acessToken) : null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, thunkAPI) => {
    const response = await authService.login(data);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    return response?.data.token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.acessToken = action.payload;
      })
      .addCase(login.rejected, (_, action) => {
        toast.error(action.payload as string);
      });
  },
});

export const auth = authSlice.reducer;
