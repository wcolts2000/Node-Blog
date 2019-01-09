const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

// middlewares
server.use(morgan("short"));
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes

// users routes
server.get();

server.get();

server.post();

server.put();

server.delete();

//posts routes
// server.get();

// server.get();

// server.post();

// server.put();

// server.delete();
