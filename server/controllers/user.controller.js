const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const userModel = require("../models/user.model");

const fetchMe = async (req, res) => {
  const { token } = req.body;
  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).json({
        message: "failed",
        detail: "invalid email",
      });
    }

    res.status(200).json({
      message: "success",
      user: {
        avatar: user.avatar,
        email: user.email,
        name: user.name,
        bio: user.bio,
        stats: {
          battlePlayed: user.battlePlayed,
          battleWon: user.battleWon,
        },
      },
    });
  } catch (err) {
    console.log("Cant Verify ME ", err);
    res.status(404).json({
      message: "failed",
      detail: "invalid token",
    });
  }
};

module.exports = {
  fetchMe,
};
