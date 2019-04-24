const db = require("../db/db");

class Task {
  static add(data, cb) {
    const sql = `
    INSERT INTO tasks1 (body) VALUES ('${data}') RETURNING *`;
    db.query(sql, cb);
  }
  static update(data, cb) {
    const sql = `UPDATE tasks SET body = '${data.text}', isCompleted = '${
      data.isCompleted
    }' WHERE id=${data.id} RETURNING *`;
    db.query(sql, cb);
  }
  static all(cb) {
    db.query(`SELECT * FROM tasks1 ORDER BY id`, cb);
  }

  static find(id, cb) {
    const sql = `
    SELECT FROM tasks WHERE id = ${id};
    `;
    db.query(sql, cb);
  }

  static delete(id, cb) {
    if (!id) return cb(new Error("Please provide an id"));
    const sql = `DELETE FROM tasks WHERE id = ${id} RETURNING *`;
    db.query(sql, cb);
  }
}

module.exports = Task;
