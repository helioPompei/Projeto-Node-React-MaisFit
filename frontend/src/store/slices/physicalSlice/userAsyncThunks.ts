import { createAsyncThunk } from "@reduxjs/toolkit";
import { physicalService } from "../../../services/physicalService";

export const getAllUserPhysicals = createAsyncThunk(
  "physical/getalluserphysicals",
  async (id: string, thunkAPI) => {
    const response = await physicalService.getAllUserPhysicals(id);
    console.log("Response one :", response.data);

    if (response instanceof Error) {
      return thunkAPI.rejectWithValue(response.toString());
    }

    return response.data;
  }
);
