import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protect = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("Invalid token");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("Invalid token");
    }

    req.user = { userId: user._id };

    // console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export { protect };
