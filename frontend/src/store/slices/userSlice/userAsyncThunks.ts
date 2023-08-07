import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../../services/userService";

export const getMyProfile = createAsyncThunk(
  "user/getMyProfile",
  async (_, thunkAPI) => {
    const response = await userService.getMyProfile();
    console.log("redux", response);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }
  }
);

export const getOneProfile = createAsyncThunk(
  "user/getOneProfile",
  async (id: string, thunkAPI) => {
    const response = await userService.getOneProfile(id);
    console.log("Response one :", response.data);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    return response.data;
  }
);

export const getAllProfiles = createAsyncThunk(
  "user/getAllProfiles",
  async (_, thunkAPI) => {
    const response = await userService.getAllProfiles();

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    return { users: response.data.users };
  }
);
