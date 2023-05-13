import { Router } from "express";
import { protect } from "../middlewares/authentication.js";
import {
  createPost,
  getPost,
  updatePost,
  commentPost,
  likePost,
  disLikePost,
  deletePost,
  getUserTimelinePosts,
} from "../controllers/postController.js";

const router = Router();

// Route for creating a post
router.post("/create", protect, createPost);

// Route for getting a post by ID 
router.get("/:postId", getPost);

// Route for updating a post by ID
router.put("/:postId", protect, updatePost);

// Route for deleting a post by ID
router.delete("/:postId", protect, deletePost);

// Route for adding a comment to a post by ID
router.post("/:postId/comments", protect, commentPost);

// Route for liking a post by ID
router.post("/:postId/likes", protect, likePost);

// Route for disliking a post by ID
router.post("/:postId/dislikes", protect, disLikePost);

// Route for getting post based on it's timeline
router.get("/timeline", protect, getUserTimelinePosts)

export default router;