const models = require("../models");

class TasksController {
  static all(cb) {
    models.Task.findAll({ order: ["createdAt"] }).then(items => {
      cb(items);
    });
  }
  static create(data, cb) {
    models.Task.create(data.task).then(item => {

      cb(item);
    });
  }
  static update(data, cb) {
    models.Task.update(data, { where: { id: data.id } }).then(() => {
      cb("ok");
    });
  }
  static delete(id, cb) {
    models.Task.destroy({ where: { id: id } }).then(item => {
      cb(id)

    });

  }
}
module.exports = TasksController;
