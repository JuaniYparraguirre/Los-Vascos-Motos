import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(97, 98, 119, 1) 0%,
    rgba(0, 3, 33, 1) 34%,
    rgba(53, 54, 55, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  @media (max-width: 758px) {
    padding: 1rem 2rem;
  }
`;

export const LinksContainersStyled = styled.div`
  color: rgb(63, 63, 63);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  a {
    padding: 1rem 1.5rem;
  }
  a:first-child {
    background: white;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: wheat;
    font-size: 1rem;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
