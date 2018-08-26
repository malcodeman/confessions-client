import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Post from "../components/Post";
import PostNewForm from "./PostNewForm";

import { getPosts } from "../actions/postsActions";

const Container = styled.div`
  max-width: 512px;
  margin: 0 auto;
  padding: 40px ${props => props.theme.padding};
`;

const StyledPosts = styled.div`
  margin-top: 20px;
`;

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;
    getPosts();
  };
  render() {
    const { posts, loading } = this.props;
    return (
      <Container>
        <PostNewForm />
        <StyledPosts>
          {loading ? <p>Loading</p> : null}
          {!loading && posts.length === 0 ? <p>No posts</p> : null}
          {posts.map(post => (
            <Post key={post._id} body={post.body} date={post.date} />
          ))}
        </StyledPosts>
      </Container>
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
