const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
    },
    avatar: {
      type: String,
      default:
        "https://content.imageresizer.com/images/memes/Annoyed-face-meme-7.jpg",
    },
    bio: {
      type: String,
      default: "Hello there, lets battle together...!!",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    battlePlayed: {
      type: Number,
      default: 0,
    },
    battleWon: {
      type: Number,
      default: 0,
    },
    accuracy: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

module.exports = mongoose.model("User", userSchema);
