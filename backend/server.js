const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config({
  path: "backend/config/config.env",
});
app.use(morgan("common"));
app.get("/", (req, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running on port ${PORT} 🔥`);
  }
});
