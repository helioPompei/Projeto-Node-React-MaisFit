import { createSlice } from "@reduxjs/toolkit";

interface IPhysical {
  evaluationDate: Date;
  height: number;
  weight: number;
  imc: number;
  currentFat: number;
  idealFat: number;
  goal: string;
  observation?: string;
  userId: string;
}

const physicalSlice = createSlice({
  name: "physical",
  initialState: "",
  reducers: {},
});

export const physical = physicalSlice.reducer;
