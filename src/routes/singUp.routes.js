const { Router } = require("express");

const singUp = Router();

const SingUpControllers = require("../Controllers/SingUp");
const singUpControllers = new SingUpControllers();

singUp.post("/", singUpControllers.create);
singUp.put("/", singUpControllers.update);

module.exports = singUp;
