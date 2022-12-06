const knex = require("../database/knex");
const { compare } = require("bcryptjs");

const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex("registerUsers").where({ email });

    if (user <= 1) {
      return res.json({ error: "Email e/ou senha incorretas" }, 401);
    }

    const passwordMatched = await compare(password, user[0].password);

    if (!passwordMatched) {
      return res.json({ error: "Email e/ou senha incorretas" }, 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.json({ user, token });
  }
}

module.exports = SessionController;
