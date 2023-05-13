import Post from "../models/post.js";

const checkPost = async (postId) => {
  if (!postId) {
    throw new Error("Post id required");
  }
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};

export { checkPost };
