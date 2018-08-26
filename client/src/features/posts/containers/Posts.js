import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../actions/postsActions";

class Posts extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;
    getPosts();
  };
  render() {
    return <div>Posts</div>;
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
