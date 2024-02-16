import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  background-image: url("hero-background.jpg"); /* Coloca aquí la imagen de fondo */
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const HeroTextContainerStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media (max-width: 968px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainerStyled = styled.div``;
