const { Router } = require("express");

const routerProduct = Router();

const Product = require("../Controllers/Product");
const product = new Product();

routerProduct.post("/", product.create);
routerProduct.delete("/:id", product.delete);

module.exports = routerProduct;
