import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: ${props => props.theme.white};
  padding: ${props => props.theme.padding};
  border-radius: ${props => props.theme.borderRadius};
`;

const Main = styled.main`
  margin-bottom: 6px;
`;

const Body = styled.p`
  color: ${props => props.theme.primary};
  word-wrap: break-word;
`;

const Time = styled.span`
  color: ${props => props.theme.secondary};
`;

function Post(props) {
  const { body, date } = props;

  return (
    <StyledPost>
      <Main>
        <Body>{body}</Body>
      </Main>
      <Time>{format(date, "hh:mm A - D MMM YYYY")}</Time>
    </StyledPost>
  );
}

export default Post;
