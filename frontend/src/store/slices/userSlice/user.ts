import { createSlice } from "@reduxjs/toolkit";
import { getAllProfiles, getOneProfile } from "./userAsyncThunks";
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
    builder
      .addCase(getAllProfiles.fulfilled, (state, action) => {
        state.students = action.payload.users;
      })
      .addCase(getOneProfile.fulfilled, (state, action) => {
        state.students = state.students?.map((student) => {
          if (student.id === action.payload.user.id) {
            return (student = action.payload.user);
          }
          return student;
        });
      });
  },
});

export const user = userSlice.reducer;
export { getAllProfiles };
