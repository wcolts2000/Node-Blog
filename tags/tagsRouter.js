const express = require("express");
const tagsDb = require("../data/helpers/tagDb");

const router = express.Router();

router.get("/users", (req, res) => {
  tagsDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users information could not be retrieved" })
    );
});

module.exports = router;
