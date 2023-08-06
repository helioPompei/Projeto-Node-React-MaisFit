import { createSlice } from "@reduxjs/toolkit";
import { getAllProfiles } from "./userAsyncThunks";
import { IUser } from "./userDataType";

const initialState: IUser = {
  id: null,
  name: null,
  email: null,
  sex: null,
  birthday: null,
  phone: null,
  students: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProfiles.fulfilled, (state, action) => {
      state.students = action.payload.users;
    });
  },
});

export const user = userSlice.reducer;
export { getAllProfiles };

