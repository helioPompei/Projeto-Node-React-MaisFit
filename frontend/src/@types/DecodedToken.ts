export interface IDecodedToken {
  exp: number;
  iat: number;
  role: "MEMBER" | "ADMIN";
  sub: string;
}
