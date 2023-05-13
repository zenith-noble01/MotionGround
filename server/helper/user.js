import User from "../models/user.js";

const checkUser = async (username, email) => {
  if (!username && !email) {
    throw new Error("Username or email required");
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    throw new Error("User already exists");
  }

  return true;
};

const findUserById = async (userId, id) => {
  if (!userId) {
    throw new Error("UserId required");
  }

  if (userId.toString() !== id) {
    throw new Error("User data don't match");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const ifUserExist = async (userId) => {
  if (!userId) {
    throw new Error("UserId required");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export { checkUser, findUserById, ifUserExist };
