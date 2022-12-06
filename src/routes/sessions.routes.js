const { Router } = require("express");

const SessionController = require("../Controllers/SessionController");
const sessionController = new SessionController();

const sessionRoutes = Router();

sessionRoutes.post("/", sessionController.create);

module.exports = sessionRoutes;
