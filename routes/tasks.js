const modelMethods = require("../controllers/task");

exports.list = (req, res) => {
  Task.all((err, tasks) => {
    if (err) return next(err);
    // res.render("tasks", { tasks: tasks.rows });
    res.json(tasks.rows);
  });
};

exports.submit = (req, res, next) => {
  const data = req.body;
  console.log(data);
  modelMethods.add(data, (err, task) => {
    res.json(task.rows);
  });
};

exports.update = (req, res) => {
  let data = req.body;
  Task.update(data, (err, task) => {
    res.json(task);
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  Task.delete(id, (err, item) => {
    res.json(item);
  });
};
