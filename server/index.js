const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*", // change to frontend URL in production
    methods: ["GET", "POST"],
  },
});

app.use(express.json()); // parse JSON

const connectDB = require("./utils/db.connection");
connectDB();

const authRoute = require("./routes/auth.route");
app.use("/auth", authRoute); // fixed slash

app.get("/", (req, res) => {
  res.json({
    status: "Working",
  });
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  // handle socket events here
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
