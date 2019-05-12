import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tile = styled.footer`
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

const Copyright = styled.span`
  font-size: 0.8rem;
  text-align: center;
  display: block;
  color: ${props => props.theme.primary};
`;

function Footer() {
  return (
    <Tile>
      <LinksWrapper>
        <Links>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/">Carrers</StyledLink>
          <StyledLink to="/">Press</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/">Advertise</StyledLink>
          <StyledLink to="/">Blog</StyledLink>
          <StyledLink to="/">Help</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/">Coins</StyledLink>
          <StyledLink to="/">Premium</StyledLink>
          <StyledLink to="/">Gifts</StyledLink>
        </Links>
      </LinksWrapper>
      <Copyright>© Confessions, Inc. All rights reserved</Copyright>
    </Tile>
  );
}

export default Footer;
