import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

interface IAuth {
  token: string | null;
}

const initialState: IAuth = {
  token: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (data: any, thunkAPI) => {
    const response = await authService.register(data);
    console.log(response);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const auth = authSlice.reducer;
