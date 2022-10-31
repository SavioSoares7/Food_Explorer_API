const knex = require("../database/knex");

const { hash, compare } = require("bcryptjs");

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
  async update(req, res) {
    const { name, email, password, old_password } = req.body;
    const { id } = req.query;

    const userId = await knex("registerUsers").where({ id: id });

    if (userId.length < 1) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }

    const checkEmail = await knex("registerUsers").where({ email: email });

    if (checkEmail[0].id != id) {
      res.status(400).json({ error: "Email já está sendo utilizado" });
    }
    if (!old_password) {
      res.status(404).json({ error: "Por favor preencha a senha antiga" });
    }

    const checkOldPassword = await compare(old_password, userId[0].password);

    if (!checkOldPassword) {
      res
        .status(400)
        .json({ error: "Por favor informe a senha antiga corretamente" });
    }

    const hashedPassword = await hash(password, 8);

    const userUpdate = {
      name: name ?? userId[0].name,
      email: email ?? userId[0].email,
      password: hashedPassword,
    };

    await knex("registerUsers").update(userUpdate).where({ id: id });

    res.json(userId);
  }
}

module.exports = SingUp;
