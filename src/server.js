const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    name,
    email,
    password,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server is running at PORT " + PORT));
