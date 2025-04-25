const { Pool } = require("pg");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST || "localhost",
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(dbConfig);

pool
  .connect()
  .then(client => {
    console.log('Connection established successfully.');
    client.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err.stack);
  });

module.exports = dbConfig;
