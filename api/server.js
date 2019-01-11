const express = require("express");
const configureMiddleware = require("../config/middleware.js");

const apiRouter = require("../api/apiRouter.js");
const usersRouter = require("../users/usersRouter");
const postsRouter = require("../posts/postsRouter");
const tagsRouter = require("../tags/tagsRouter");

const server = express();

// MIDDLEWARE
configureMiddleware(server);

// ROUTES
server.use("/api", apiRouter);
server.use("/users", usersRouter);
server.use("/posts", postsRouter);
server.use("/tags", tagsRouter);

module.exports = server;
