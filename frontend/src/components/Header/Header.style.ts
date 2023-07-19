import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(p) => p.theme.colors.secundary};
  padding: 1rem 4rem 1rem 4em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100%;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  font-size: 2rem;
  gap: 1em;

  a {
    text-decoration: none;
    color: white;
  }
`;
