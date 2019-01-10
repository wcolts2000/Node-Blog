const express = require("express");

const postsRouter = require("../posts/postsRouter.js");
const usersRouter = require("../users/usersRouter.js");
const tagsRouter = require("../tags/tagsRouter");

const router = express.Router();

router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use("/tags", tagsRouter);

module.exports = router;
