import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  background-color: ${props => props.theme.backgroundSecondary};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;

const Header = styled.header`
  margin-bottom: 8px;
`;

const Main = styled.main`
  margin-bottom: 8px;
`;

const Body = styled.p`
  word-wrap: break-word;
  color: ${props => props.theme.primary};
`;

const Time = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

function Post(props) {
  const { body, date } = props;

  return (
    <StyledPost>
      <Header>
        <Time>{distanceInWordsToNow(date)} ago</Time>
      </Header>
      <Main>
        <Body>{body}</Body>
      </Main>
    </StyledPost>
  );
}

export default Post;
