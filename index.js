const express = require("express");
const cors = require("cors"); // Import cors package

const app = express();

// Apply CORS middleware
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this origin
    methods: ["GET", "POST"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// Define a simple route
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

// Start the server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
