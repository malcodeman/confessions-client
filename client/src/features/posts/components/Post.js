import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Main = styled.main`
  margin-bottom: 6px;
`;

const Body = styled.p`
  color: ${props => props.theme.primary};
`;

const Time = styled.span`
  color: ${props => props.theme.secondary};
`;

const Post = props => {
  const { body, date } = props;
  return (
    <StyledPost>
      <Main>
        <Body>{body}</Body>
      </Main>
      <Time>{format(date, "hh:mm A - D MMM YYYY")}</Time>
    </StyledPost>
  );
};

export default Post;
