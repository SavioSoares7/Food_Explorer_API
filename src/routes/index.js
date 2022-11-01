const { Router } = require("express");

const routes = Router();

const singUp = require("./singUp.routes");
const product = require("./productRegistration.routes");

routes.use("/singUp", singUp);
routes.use("/admin/newproduct", product);

module.exports = routes;
