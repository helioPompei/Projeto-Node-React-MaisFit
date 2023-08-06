import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ILoginData } from "../../@types/LoginType";
import { useTokenDecoded } from "../../hooks/useTokenDecoded";
import { authService } from "../../services/authService";
import { getTokenLocalStorage } from "../../utils/getTokenLocalStorage";

const tokenData = getTokenLocalStorage();

interface IAuth {
  isLoggedIn: boolean;
  accessToken: string | null;
  role: "MEMBER" | "ADMIN" | null;
}

const initialState: IAuth = {
  isLoggedIn: tokenData?.token ? true : false,
  accessToken: tokenData?.token ? tokenData?.token : null,
  role: tokenData?.role ? tokenData?.role : null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, thunkAPI) => {
    const response = await authService.login(data);

    console.log(response);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    localStorage.setItem("token", response?.data.token);

    const { role } = useTokenDecoded(response?.data.token);

    return { token: response?.data.token, role };
  }
);

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
