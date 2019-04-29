import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tile = styled.div`
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};
`;

const Submit = styled(Link)`
  font-size: 0.8rem;
  padding: 6px 16px;
  cursor: pointer;
  color: #fff;
  display: block;
  text-align: center;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

function Home() {
  return (
    <Tile>
      <Title>Home</Title>
      <Description>
        Your personal frontpage. Come here to check in with your favorite posts.
      </Description>
      <Submit to="/submit">Create post</Submit>
    </Tile>
  );
}

export default Home;
