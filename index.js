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

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
