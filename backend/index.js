require("dotenv").config();
const express = require("express");
const sequelize = require("./src/database/database");
const app = express();
const routes = require("./src/routes");

app.use(express.json());

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
    process.exit(1);
  }
};

app.use("/api", routes);
app.get("/status", (req, res) => {
  res.json({ message: "API is working!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  syncDatabase();
});
