export interface IPhysical {
  physicals: Array<{
    evaluationDate: string | null;
    height: number | null;
    weight: number | null;
    imc: number | null;
    currentFat: number | null;
    idealFat: number | null;
    goal: string | null;
    observation: string | null;
    userId: string | null;
  }> | null;
}
