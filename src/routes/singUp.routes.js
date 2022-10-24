const { Router } = require("express");

const singUp = Router();

const SingUpControllers = require("../Controllers/SingUp");
const singUpControllers = new SingUpControllers();

singUp.post("/", singUpControllers.create);

module.exports = singUp;
