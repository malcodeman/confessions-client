import Post from "./posts_model";

export async function create(req, res, next) {
  try {
    const post = await Post.create(req.body);
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const posts = await Post.find({}).sort({ date: -1 });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
