const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/dbConnection");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();
const port = process.env.PORT || 80;

app.use(helmet());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true,
  })
);

// Health check 
app.get("/", (req, res) => {
  res.json({ msg: "Hey, CTSE Deployment is working!" });
});

// User route
app.use("/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  databaseConnection();
});

module.exports = app;
