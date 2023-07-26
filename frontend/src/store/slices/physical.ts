import { createSlice } from "@reduxjs/toolkit";

interface IPhysical {
  evaluationDate: Date | null;
  height: number;
  weight: number;
  imc: number;
  currentFat: number;
  idealFat: number;
  goal: string | null;
  observation?: string | null;
  userId: string | null;
}

const initialState: IPhysical = {
  evaluationDate: null,
  height: 0,
  weight: 0,
  imc: 0,
  currentFat: 0,
  idealFat: 0,
  goal: null,
  observation: null,
  userId: null,
};

const physicalSlice = createSlice({
  name: "physical",
  initialState,
  reducers: {},
});

export const physical = physicalSlice.reducer;
