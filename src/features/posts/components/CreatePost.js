import React from "react";
import styled from "styled-components";

import CreatePostForm from "./CreatePostForm";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Container = styled.div`
  padding: 64px 20px;
  max-width: 992px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
  }
`;

const PostsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 576px;
  @media (min-width: 992px) {
    margin: initial;
    width: initial;
    max-width: initial;
  }
`;

const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 64px;
`;

const Header = styled.header`
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};
`;

function CreatePost() {
  return (
    <Wrapper>
      <Container>
        <PostsContainer>
          <Header>Create post</Header>
          <CreatePostForm />
        </PostsContainer>
        <SidebarContainer>
          <Sidebar>
            <Footer />
          </Sidebar>
        </SidebarContainer>
      </Container>
    </Wrapper>
  );
}

export default CreatePost;
