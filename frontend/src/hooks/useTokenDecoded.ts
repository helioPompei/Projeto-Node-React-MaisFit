import jwtDecode from "jwt-decode";
import { IDecodedToken } from "../@types/DecodedToken";

export const useTokenDecoded = (token: string) => {
  const decodedToken = jwtDecode<IDecodedToken>(token);

  return decodedToken;
};
