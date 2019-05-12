import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Observer from "@researchgate/react-intersection-observer";

import PostLoading from "../components/PostLoading";
import Post from "../components/Post";
import Home from "../components/Home";
import Footer from "../components/Footer";

import { getPosts } from "../actions/postsActions";

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

const PostEmpty = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${props => props.theme.primary};
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

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts, posts, page, limit } = this.props;

    if (posts.length === 0) {
      getPosts({ page, limit });
    }
  };

  handleIntersecting = ({ isIntersecting }) => {
    const { getPosts, page, limit } = this.props;

    if (isIntersecting) {
      getPosts({ page, limit });
    }
  };

  render() {
    const { posts, loading, totalItemCount } = this.props;

    return (
      <Wrapper>
        <Container>
          <PostsContainer>
            {loading && posts.length === 0 && <PostLoading />}
            {!loading && posts.length === 0 && (
              <PostEmpty>No posts yet</PostEmpty>
            )}
            {posts.map(post => (
              <Post key={post._id} body={post.body} date={post.date} />
            ))}
            <Observer
              onChange={this.handleIntersecting}
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
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    totalItemCount: state.posts.totalItemCount,
    page: state.posts.page,
    limit: state.posts.limit
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts
  }
)(Posts);
