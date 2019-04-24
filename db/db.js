// const { Client } = require("pg");
const Sequelize = require("sequelize");

const username = "sergey";
const password = "sergey";
const host = "localhost";
const port = 5432;
const database = "tasks";
const dialect = "postgres";
const pool = {
  max: 5,
  min: 0,
  idle: 10000
};

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  pool
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Соединение установлено");
  })
  .catch(err => {
    console.error("Ошибка соединения:", err);
  });

// const Task = sequelize.define(
//   "task",
//   {
//     //attributes
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     body: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {}
// );

module.exports = sequelize;
// const db = new Client({
//   database: "tasks",
//   host: "localhost",
//   port: 5432,
//   user: username,
//   password: password
// });

// db.connect((err, client) => {
//   if (err) throw err;
//   console.log("Connected to database", db.database);
// });

// db.query(
//   `
//   CREATE TABLE IF NOT EXISTS taskstable (
//     id SERIAL,
//     PRIMARY KEY(id),
//     body text,
//     iscompleted boolean
//   );
// `,
//   (err, result) => {
//     if (err) throw err;
//     console.log('Created table "taskstable"');
//   }
// );
