import jwtDecode from "jwt-decode";
import { IDecodedToken } from "../@types/DecodedToken";

type tokenData = {
  token: string;
  role: "MEMBER" | "ADMIN" | null;
};

export const getTokenLocalStorage = (): tokenData | null => {
  // Get Token from Local Storage
  const token = localStorage.getItem("token");

  // Check if token exists
  if (token) {
    const decodedToken = jwtDecode<IDecodedToken>(token);

    // Return token and role
    const tokenData: tokenData = {
      token: token,
      role: decodedToken.role,
    };

    return tokenData;
  }

  return null;
};
