// import Boton from "../UI/Boton";
import {
  HeroContainerStyled,
  HeroImageContainerStyled,
  HeroTextContainerStyled,
  // HeroImageContainerStyled,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>¡Encuentra la moto de tus sueños!</h1>
        <p>
          Explora nuestra amplia selección de motocicletas y encuentra la
          perfecta para ti.
        </p>
        <a href="#" class="btn">
          Ver Catálogo
        </a>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img src=""></img>
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
