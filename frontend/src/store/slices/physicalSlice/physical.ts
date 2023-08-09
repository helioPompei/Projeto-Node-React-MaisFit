import { createSlice } from "@reduxjs/toolkit";
import { IPhysical } from "./physicalDataType";
import { getAllUserPhysicals } from "./userAsyncThunks";

const initialState: IPhysical = {
  physicals: null,
};

const physicalSlice = createSlice({
  name: "physical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserPhysicals.fulfilled, (state, action) => {
      state.physicals = action.payload.physicals;
    });
    //     .addCase(getOneProfile.fulfilled, (state, action) => {
    //       state.students = state.students?.map((student) => {
    //         if (student.id === action.payload.user.id) {
    //           return (student = action.payload.user);
    //         }
    //         return student;
    //       });
    //     });
  },
});

export const physical = physicalSlice.reducer;
