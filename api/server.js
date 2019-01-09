const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const userDb = require("../data/helpers/userDb");
const postsDb = require("../data/helpers/postDb");
const tagDb = require("../data/helpers/tagDb");

const server = express();

// MIDDLEWARE

// Applying Middleware
server.use(morgan("short"));
server.use(helmet());
server.use(cors());
server.use(express.json());

// Custom Middleware
function uppercaseUsername(req, res, next) {
  let { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Please provide a UserName, thank you" });
  }
  if (name[0] !== name[0].toUpperCase()) {
    res.status(400).json({
      message: "Please capitalize the first letter of the UserName, thank you."
    });
  } else {
    next();
  }
}

// ROUTES

// USER ROUTES

// Single User Posts List
server.get("/api/users/:userId/posts", (req, res) => {
  const { userId } = req.params;
  userDb
    .getUserPosts(userId)
    .then(usersPosts => {
      if (usersPosts) {
        res.status(200).json(usersPosts);
      } else {
        res
          .status(404)
          .json({ message: "posts for that users could not be found" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users posts information could not be retrieved" })
    );
});

// Single User
server.get("/api/users/:userId", (req, res) => {
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

// Users List
server.get("/api/users", (req, res) => {
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
server.post("/api/users", uppercaseUsername, (req, res) => {
  const newUser = req.body;

  // if (!newUser.name) {
  //   return res
  //     .status(400)
  //     .json({ errorMessage: "Please provide a UserName, Thank you..." });
  // }
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
server.put("/api/users/:userId", uppercaseUsername, (req, res) => {
  const { userId } = req.params;
  const changedUser = req.body;

  userDb
    .get(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "That user does not exist" });
      }
      // if (!changedUser.name) {
      //   res
      //     .status(400)
      //     .json({ errorMessage: "Please provide a UserName to update..." });
      // }
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
server.delete("/api/users/:userId", (req, res) => {
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

// POSTS ROUTES

// Get Posts List
server.get("/api/posts/users", (req, res) => {
  postsDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users information could not be retrieved" })
    );
});

// server.get();

// server.post();

// server.put();

// server.delete();

// TAGS ROUTES

// Get Tags List
server.get("/api/tag/users", (req, res) => {
  tagDb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err =>
      res
        .status(500)
        .json({ error: "the users information could not be retrieved" })
    );
});

// server.get();

// server.post();

// server.put();

// server.delete();

module.exports = server;
