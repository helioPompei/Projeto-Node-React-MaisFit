import jwtDecode from "jwt-decode";

type DecodedToken = {
  exp: number;
  role: "MEMBER" | "ADMIN";
};

type tokenData = {
  token: string;
  role: "MEMBER" | "ADMIN" | null;
};

export const getTokenLocalStorage = (): tokenData | null => {
  // Get Token from Local Storage
  const token = localStorage.getItem("token");

  // Check if token exists
  if (token) {
    const decodedToken = jwtDecode<DecodedToken>(token);

    const tokenData: tokenData = {
      token: token,
      role: decodedToken.role,
    };

    return tokenData;
  }

  return null;
};

// export const decodeToken = (token: string) => {
//   const decodedToken = jwtDecode<DecodedToken>(token);

//   if (decodedToken.exp * 1000 > Date.now()) {
//     return decodedToken;
//   }

//   return null;
// };
