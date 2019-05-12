import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundPrimaryLoading};
`;

const Header = styled.div`
  height: 0.8rem;
  width: 25%;
  margin-bottom: 8px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondaryLoading};
`;

const Body = styled.div`
  height: 1rem;
  width: 50%;
  margin-bottom: 8px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondaryLoading};
`;

function PostLoading() {
  return (
    <StyledPost>
      <Header />
      <Body />
    </StyledPost>
  );
}

export default PostLoading;
