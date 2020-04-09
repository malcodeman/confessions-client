import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Observer from "@researchgate/react-intersection-observer";

import PostLoading from "./PostLoading";
import Post from "./Post";
import Home from "./Home";
import Footer from "./Footer";

import { getPosts } from "../actions/postsActions";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
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

const PostEmpty = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.theme.primary};
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

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const totalItemCount = useSelector((state) => state.posts.totalItemCount);
  const page = useSelector((state) => state.posts.page);
  const limit = useSelector((state) => state.posts.limit);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts({ page, limit }));
    }
  }, [limit, page, posts.length, dispatch]);

  function handleIntersecting({ isIntersecting }) {
    if (isIntersecting) {
      dispatch(getPosts({ page, limit }));
    }
  }

  return (
    <Wrapper>
      <Container>
        <PostsContainer>
          {loading && posts.length === 0 && <PostLoading />}
          {!loading && posts.length === 0 && (
            <PostEmpty>No posts yet</PostEmpty>
          )}
          {posts.map((post) => (
            <Post key={post._id} body={post.body} date={post.date} />
          ))}
          <Observer
            onChange={handleIntersecting}
            disabled={
              loading || posts.length === 0 || posts.length === totalItemCount
            }
          >
            <div />
          </Observer>
        </PostsContainer>
        <SidebarContainer>
          <Sidebar>
            <Home />
            <Footer />
          </Sidebar>
        </SidebarContainer>
      </Container>
    </Wrapper>
  );
}

export default Posts;
