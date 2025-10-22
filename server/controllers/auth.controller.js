const { oauth2client } = require("../utils/config.google");
const axios = require("axios");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const loginWithGoogle = async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2client.getToken(code);
    oauth2client.setCredentials(tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    // find in db

    const { email, name} = userRes.data;
    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({ email, name });
    }

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "success",
      token,
      user: {
        avatar: user.avatar,
        email: user.email,
        name: user.name,
        bio : user.bio,
        stats: {
          battlePlayed: user.battlePlayed,
          battleWon: user.battleWon,
        },
      },
    });
  } catch (err) {
    console.log("Google Login Error :", err);
    res.status(500).json({
      message: "failed",
    });
  }
};

module.exports = {
  loginWithGoogle,
};
