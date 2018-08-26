import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  top: 0;
  position: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: ${props => props.theme.headerBackground};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
  letter-spacing: 1px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <StyledLink to="/">Confessio</StyledLink>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
