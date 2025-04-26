const { Sequelize } = require("sequelize");
const dbConfig = require("../config");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "postgres",
    logging: false,
    pool: {
      max: dbConfig.max,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      underscored: true,
    }
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    const localColor = dbConfig.host === "localhost" ? "\x1b[35m(localhost)\x1b[0m" : "";
    console.log(`\n\x1b[34mConnection established successfully\x1b[0m ${localColor}`);
  } catch (error) {
    console.error("\n\x1b[31mUnable to connect to the database:\x1b[0m", error);
    process.exit(1);
  }
};

testConnection();

module.exports = sequelize;
