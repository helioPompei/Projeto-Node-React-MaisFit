import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../store/store";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
