import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData } from "../../../@types/LoginType";
import { authService } from "../../../services/authService";
import { useTokenDecoded } from "../../../hooks/useTokenDecoded";

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
