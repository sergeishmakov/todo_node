const Task = require("../models/tasksSequelize");

class modelMethods {
  static add(data, cb) {
    Task.create(data).then(
      item => console.log("Task success added with id =", item.id),
      cb()
    );
  }
}
module.exports = modelMethods;
