import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import * as S from "./Header.style";

export const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt="Logo Mais Fit Academia" />

      <S.NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/prices">Preços</NavLink>
        <NavLink to="/login">Login</NavLink>
      </S.NavContainer>

      <div>PAINEL</div>
    </S.Header>
  );
};
