const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    account: [
      {
        id: "1",
        username: "samonbk",
        password: "123",
        role: "",
      },
    ],
  });
});

module.exports = app;
