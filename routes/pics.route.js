const express = require("express");

const picController = require("../controllers/pics.controller");

const picsRouter = express.Router();

picsRouter.get("/",picController);

module.exports = picController;