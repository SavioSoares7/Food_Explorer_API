const knex = require("../database/knex");

const { hash } = require("bcryptjs");

class SingUp {
  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ error: "Por favor preencha todos os campos" });
    }

    let hashedPassword = await hash(password, 8);

    let userEmail = await knex("registerUsers").where({ email });

    if (userEmail.length > 0) {
      return res.status(400).json({ error: "Usuário já cadastrado" });
    }

    await knex("registerUsers").insert({
      name,
      email,
      password: hashedPassword,
    });
    res.json({ name, email, password });
  }
}

module.exports = SingUp;
