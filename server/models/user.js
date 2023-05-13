import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/dvfeybrvk/image/upload/v1682258754/download_pdurif.png",
    },
    friendRequests: [
      {
        friendUser: { type: String, required: true },
        isApproved: { type: Boolean, default: false },
      },
    ],
    friends: [
      {
        friendUser: { type: String, required: true },
      },
    ],
    description: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
