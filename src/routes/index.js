const { Router } = require("express");

const routes = Router();

const singUp = require("./singUp.routes");

routes.use("/singUp", singUp);

module.exports = routes;
