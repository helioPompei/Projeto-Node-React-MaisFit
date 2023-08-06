import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import * as S from "./Header.style";
import { useTypedDispatch, useTypedSelector } from "../../store/store";
import { logout } from "../../store/slices/auth";
import { authService } from "../../services/authService";

export const Header = () => {
  const { isLoggedIn, role } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  return (
    <S.Header>
      <img src={logo} alt="Logo Mais Fit Academia" />

      <S.NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/prices">Preços</NavLink>

        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {isLoggedIn && role === "ADMIN" && (
          <NavLink to="/students">Alunos</NavLink>
        )}

        {isLoggedIn && (
          <button
            onClick={() => {
              authService.logout();
              dispatch(logout());
            }}
          >
            Logout
          </button>
        )}
      </S.NavContainer>
    </S.Header>
  );
};
