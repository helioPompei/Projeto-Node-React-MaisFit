export interface IAuth {
  isLoggedIn: boolean;
  accessToken: string | null;
  role: "MEMBER" | "ADMIN" | null;
}
