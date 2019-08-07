const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikesController = require("./controllers/LikesController");

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikesController.store);

module.exports = routes;