const knex = require("../database/knex");

class Product {
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

  async delete(req, res) {
    const { id } = req.params;

    const product = await knex("product").where({ id });

    if (product.length < 1) {
      res.status(404).json({ error: "Item não encontrado" });
    }

    await knex("product").where({ id }).del();
    res.json({ id });
  }

  async read(req, res) {
    const { name } = req.query;

    const products = await knex("product").whereLike("name", `%${name}%`);

    res.json({ products });
  }
}

module.exports = Product;
