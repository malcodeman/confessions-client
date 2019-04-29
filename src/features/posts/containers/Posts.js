import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PostLoading from "../components/PostLoading";
import Post from "../components/Post";

import { getPosts } from "../actions/postsActions";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 64px 20px;
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Container = styled.div`
  max-width: 512px;
  margin: 0 auto;
`;

const PostEmpty = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${props => props.theme.primary};
`;

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;

    getPosts();
  };

  render() {
    const { posts, loading } = this.props;

    return (
      <Wrapper>
        <Container>
          <>
            {loading && posts.length === 0 && <PostLoading />}
            {!loading && posts.length === 0 && (
              <PostEmpty>No posts yet</PostEmpty>
            )}
            {posts.map(post => (
              <Post key={post._id} body={post.body} date={post.date} />
            ))}
          </>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts
  }
)(Posts);
