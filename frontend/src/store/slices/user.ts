import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  token: string
    name         String
    email        String    @unique
    role         Role      @default(MEMBER)
    sex          Sex       @default(UNDEFINED)
    birthday     DateTime?
    phone        String?

  
    // trainingSheets      TrainingSheet[]
    // physicalEvaluations PhysicalEvaluation[]
  

}

const initialState: IUser = {
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

const userSlice = createSlice({
  name: "physical",
  initialState,
  reducers: {},
});

export const physical = physicalSlice.reducer;
