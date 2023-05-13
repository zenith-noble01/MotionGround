import express from "express";
import {
  acceptFriendRequest,
  createUser,
  deleteUser,
  getAllFriendRequests,
  getUser,
  loginUser,
  sendFriendRequest,
  updatePassword,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authentication.js";

const router = express.Router();

// Register user route
router.post("/register", createUser);

// Login user route
router.post("/login", loginUser);

// Update user profile or Data route
router.put("/:id", protect, updateUser);

// Delete user route
router.delete("/:id", protect, deleteUser);

// Get user data route
router.get("/u/:userId", getUser);

// Update user password route
router.put("/updatePass/:id", protect, updatePassword);

// Get all friend requests for authenticated user route
router.get("/friend-request", protect, getAllFriendRequests);

// Send a friend request to a user route (authenticated)
router.post("/:id/friend-request", protect, sendFriendRequest);

// Accept a friend request route (authenticated)
router.post("/:id/friend-request/accept", protect, acceptFriendRequest);

export default router;