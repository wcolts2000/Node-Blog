const express = require("express");
const uppercaseUsername = require("../customMiddleware/capitalizeMiddleware");
const userDb = require("../data/helpers/userDb");

const router = express.Router();

// Single User
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  userDb
    .get(userId)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "a user with that ID does not exist" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "the user information could not be retrieved" })
    );
});

// Single User Posts
router.get("/:userId/posts", (req, res) => {
  const { userId } = req.params;
  userDb
    .getUserPosts(userId)
    .then(user => {
      if (user.length) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({
            message:
              "a user with that ID does not exist or has no posts associated with them yet"
          });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "the user information could not be retrieved" })
    );
});

// Users List
router.get("/", (req, res) => {
  userDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users information could not be retrieved" })
    );
});

// Add User
router.post("/", uppercaseUsername, (req, res) => {
  const newUser = req.body;

  userDb
    .insert(newUser)
    .then(({ id }) => {
      userDb
        .get(id)
        .then(user => res.status(201).json(user))
        .catch(err =>
          res.status(500).json({
            errorMessage:
              "there was an error while saving the user to the database"
          })
        );
    })
    .catch(err =>
      res.status(500).json({
        error: "there was an error while saving the user to the database"
      })
    );
});

// Update User
router.put("/:userId", uppercaseUsername, (req, res) => {
  const { userId } = req.params;
  const changedUser = req.body;

  userDb
    .get(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "That user does not exist" });
      }
      userDb
        .update(userId, changedUser)
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err =>
          res
            .status(500)
            .json({ error: "The user information could not be updated" })
        );
    })
    .catch(err =>
      res.status(500).json({ error: "there was an error updating user" })
    );
});

// Delete User
router.delete("/:userId", (req, res) => {
  const { userId } = req.params;
  userDb
    .get(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "That user does not exist" });
      }
      userDb.remove(userId).then(res.status(200).json(user));
    })
    .catch(err =>
      res.status(500).json({ error: "there was an error removing that user" })
    );
});

module.exports = router;
