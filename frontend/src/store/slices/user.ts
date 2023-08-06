import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

type Sex = "MALE" | "FEMALE" | "UNDEFINED";

interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  sex: Sex | null;
  birthday: Date | null;
  phone: string | null;

  students: Array<{
    id: string | null;
    name: string | null;
    email: string | null;
    sex: Sex | null;
    birthday: Date | null;
    phone: string | null;
  }> | null;
}

const initialState: IUser = {
  id: null,
  name: null,
  email: null,
  sex: null,
  birthday: null,
  phone: null,
  students: null,
};

export const getMyProfile = createAsyncThunk(
  "user/getMyProfile",
  async (_, thunkAPI) => {
    const response = await userService.getMyProfile();
    console.log("redux", response);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    //   return { token: response?.data.token, role };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const user = userSlice.reducer;
