const { Router } = require("express");

const routes = Router();

const singUp = require("./singUp.routes");
const product = require("./productRegistration.routes");
const sessionRoutes = require("./sessions.routes");

routes.use("/singUp", singUp);
routes.use("/admin/product", product);
routes.use("/sessions", sessionRoutes);

module.exports = routes;
