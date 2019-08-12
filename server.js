const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const watchlistRouter = require("./watchlist/watchlist-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);
server.use("/api", usersRouter);
server.use("/api", watchlistRouter);

server.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = server;
