import styled from "styled-components";
import HomeBackground from "../../assets/backgrounds/HomeBackground.jpg";

export const HomeContainer = styled.div`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% top;
  height: 720px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: right;
`;

export const Content = styled.div`
  border: 1px solid black;
  color: white;
  height: 300px;
  width: 600px;

  position: relative;
  right: 10%;

  h1 {
    font-size: 4rem;
  }
`;
