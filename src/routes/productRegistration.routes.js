const { Router } = require("express");

const routerProduct = Router();

const ProductRegistration = require("../Controllers/ProductRegistration");
const productRegistration = new ProductRegistration();

routerProduct.post("/", productRegistration.create);

module.exports = routerProduct;
