type Sex = "MALE" | "FEMALE" | "UNDEFINED";

export interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  sex: Sex | null;
  birthday: Date | null;
  phone: string | null;

  students?: Array<{
    id: string | null;
    name: string | null;
    email: string | null;
    sex: Sex | null;
    birthday: Date | null;
    phone: string | null;
    createdAt: string | null;
  }> | null;
}
