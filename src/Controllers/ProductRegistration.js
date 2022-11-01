const knex = require("../database/knex");

class ProductRegistration {
  async create(req, res) {
    const { banner, name, category, ingredient, description, price } = req.body;

    if (
      !banner ||
      !name ||
      !category ||
      !ingredient ||
      !description ||
      !price
    ) {
      res.status(400).json({ error: "Por favor preencha todos os campos" });
    }

    const addProduct = {
      banner,
      name,
      category,
      ingredient,
      description,
      price,
    };

    await knex("product").insert(addProduct);
    res.json(addProduct);
  }
}

module.exports = ProductRegistration;
