import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  body: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
