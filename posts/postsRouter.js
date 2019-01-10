const express = require("express");
const postsDb = require("../data/helpers/postDb");

const router = express.Router();

router.get("/users", (req, res) => {
  postsDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users information could not be retrieved" })
    );
});

module.exports = router;
