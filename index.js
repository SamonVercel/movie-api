const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

module.exports = app; // Ensure this is the export
