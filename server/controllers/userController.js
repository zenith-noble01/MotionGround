import User from "../models/user.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { cloudinary } from "../config/cloudinary.js";
import { checkUser, findUserById } from "../helper/user.js";

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    await checkUser(username, email);

    if (!password) {
      throw new Error("Password required");
    }

    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      token,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.params;

    if (userId.toString() !== id) {
      throw new Error("Can update only your user");
    }

    let profileUrl = "";

    if (req.file) {
      // Check if the profile picture was provided
      const image = await cloudinary.uploader.upload(req.file.path); // Upload the image to Cloudinary
      profileUrl = image.secure_url; // Get the secure URL of the uploaded image
    }

    const { profilePic, ...others } = req.body;

    const updatedFields = { ...others }; // Create a copy of others fields

    if (profileUrl) {
      // Add the profile URL to the updated fields
      updatedFields.profile = profileUrl;
    }

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const { userId } = req.user;
    const { id } = req.params;

    if (userId.toString() !== id) {
      throw new Error("Can update only your user");
    }

    const user = await User.findById(userId);

    const isMatch = await compare(currentPassword, user.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const hashedPassword = await hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user details by user ID
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Remove sensitive fields before sending user object
    const { password, friendRequests, ...userData } = user.toObject();

    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendFriendRequest = async (req, res) => {
  try {
    const { id } = req.params; // ID of the recipient user
    const { userId } = req.user; // ID of the sender user

    console.log(userId);
    // Check if the sender and recipient are the same user
    if (id === userId) {
      throw new Error("You cannot send a friend request to yourself!");
    }

    // Check if the recipient user exists
    const recipient = await User.findById(id);
    if (!recipient) {
      throw new Error("The recipient user does not exist!");
    }

    const sender = await User.findById(userId);

    // Check if the sender is already friends with the recipient
    const existingFriend = sender.friends.find((friend) => friend.user === id);
    if (existingFriend) {
      throw new Error("You already sent a friend request to this user!");
    }

    // Check if the sender has already sent a friend request to the recipient
    const existingFriendRequest = sender.friendRequests.find(
      (friendRequest) => friendRequest.user === id
    );
    if (existingFriendRequest) {
      return res.status(400).send({
        message: "You have already sent a friend request to this user!",
      });
    }

    // Add the friend request to the sender's friendRequests array
    sender.friendRequests.push({ user: id });

    await sender.save();

    return res
      .status(200)
      .send({ message: "Friend request sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const acceptFriendRequest = async (req, res) => {
  try {
    const { id } = req.params; // ID of the user who sent the friend request to be accepted
    const { userId } = req.user; // ID of the recipient user

    // Check if the recipient user exists
    const recipient = await User.findById(userId);
    if (!recipient) {
      return res
        .status(404)
        .send({ message: "The recipient user does not exist!" });
    }

    const sender = await User.findById(id);

    // Check if there is a friend request from the sender
    const friendRequest = recipient.friendRequests.find(
      (friendReq) => friendReq.user === id
    );
    if (!friendRequest) {
      return res
        .status(404)
        .send({ message: "There is no friend request from this user!" });
    }

    // Check if the sender is already friends with the recipient
    const existingFriend = recipient.friends.find(
      (friend) => friend.user === id
    );
    if (existingFriend) {
      return res
        .status(400)
        .send({ message: "You are already friends with this user!" });
    }

    // Accept the friend request by adding both users to each other's friends array
    recipient.friends.push({ user: id });
    sender.friends.push({ user: userId });

    // Update the friend requests to approved
    friendRequest.isApproved = true;

    // Save changes to the sender and recipient documents
    await Promise.all([sender.save(), recipient.save()]);

    return res
      .status(200)
      .send({ message: "Friend request accepted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
const getAllFriendRequests = async (req, res) => {
  try {
    const { userId } = req.user;
    console.log(userId);
    const user = await User.findById(userId).populate({
      path: "friendRequests.friendUser",
      select: "username profile",
    });
    const friendRequests = user.friendRequests || []; // Check if friendRequests is not null, otherwise initialize it as an empty array
    const pendingRequests = friendRequests.filter(
      (request) => !request.isApproved
    );
    res.status(200).json({ friendRequests: pendingRequests });
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log("me");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.user;

    const { id } = req.params;

    const user = await findUserById(userId, id);

    await User.findByIdAndDelete(user?._id);

    return res.status(200).send({ message: " Account deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createUser,
  loginUser,
  updateUser,
  updatePassword,
  getUser,
  deleteUser,
  sendFriendRequest,
  acceptFriendRequest,
  getAllFriendRequests,
};
