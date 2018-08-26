import Posts from "../../features/posts/containers/Posts";
import Post from "../../features/post/containers/Post";

export default [
  {
    path: "/",
    component: Posts,
    exact: true
  },
  {
    path: "/:id",
    component: Post
  }
];

