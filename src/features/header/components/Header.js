import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 48px;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: ${props => props.theme.primary};
`;

const Submit = styled(Link)`
  font-size: 0.8rem;
  padding: 6px 16px;
  cursor: pointer;
  color: #fff;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <StyledLink to="/">Confessio</StyledLink>
        <Submit to="/submit">Post</Submit>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
