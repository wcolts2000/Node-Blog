const express = require("express");
const postsDb = require("../data/helpers/postDb");
const usersDb = require("../data/helpers/userDb");

const router = express.Router();

// Get Users Posts
router.get("/", (req, res) => {
  postsDb
    .get()
    .then(usersPosts => res.status(200).json(usersPosts))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the posts information could not be retrieved" })
    );
});

// Get Single Post
router.get("/:postId", (req, res) => {
  const { postId } = req.params;
  postsDb
    .get(postId)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved" })
    );
});

// Post Post
router.post("/:userId", (req, res) => {
  const { text } = req.body;
  const { userId } = req.params;

  usersDb
    .get(userId)
    .then(user => {
      if (user) {
        postsDb
          .insert({ userId, text })
          .then(post => res.status(201).json(post))
          .catch(err =>
            res.status(500).json({
              errorMessage:
                "there was an error while saving the post to the database"
            })
          );
      } else {
        res.status(404).json({ message: "No user by that id in database" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "there is on user with that id in the database" })
    );
});

// Delete Single Post
router.delete("/:postId", (req, res) => {
  const { postId } = req.params;
  postsDb
    .get(postId)
    .then(post => {
      if (!post) {
        res.status(404).json({ message: "That post does not exist" });
      }
      postsDb
        .remove(postId)
        .then(res.status(200).json({ message: "Post Removed" }));
    })
    .catch(err =>
      res.status(500).json({ error: "there was an error removing the post" })
    );
});

// Update Single Post
router.put("/:postId", (req, res) => {
  const { postId } = req.params;
  const changedPost = req.body;

  postsDb.get(postId).then(post => {
    if (!post) {
      res.status(404).json({ message: "That post does not exist" });
    }
    postsDb
      .update(postId, changedPost)
      .then(updatedPost => res.status(200).json(updatedPost))
      .catch(err =>
        res
          .status(500)
          .json({ error: "The Post information could not be updated" })
      );
  });
});

module.exports = router;
