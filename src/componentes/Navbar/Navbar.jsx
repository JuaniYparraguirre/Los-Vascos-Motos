import {
  NavbarContainerStyled,
  LinksContainersStyled,
  LinkContainerStyled,
  UserContainerStyled,
  HomeContainerStyled,
  MenuContainerStyled,
  UserNavStyled,
  SpanStyled,
} from "./NavbarStyles";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <NavbarContainerStyled>
        <a href="#">
          <img src="../imgenes/Logo.jpg" alt="logo" />
        </a>

        <LinksContainersStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>
                <HiHome />
              </LinkContainerStyled>
              Home
            </a>
          </HomeContainerStyled>

          <UserNavStyled>
            <UserContainerStyled>
              <SpanStyled>Inicio Secion</SpanStyled>
              <FaUserAlt />
            </UserContainerStyled>
          </UserNavStyled>
          <MenuContainerStyled>
            <AiOutlineMenu />
          </MenuContainerStyled>
        </LinksContainersStyled>
      </NavbarContainerStyled>
    </div>
  );
}

export default Navbar;
