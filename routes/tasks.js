const TasksController = require("../controllers/tasksController");

exports.list = (req, res) => {
  TasksController.all(items => {
    res.json(items);
  });
};

exports.submit = (req, res, next) => {
  const data = req.body;

  TasksController.create(data, item => {
    res.json(item);
  });
};

exports.update = (req, res) => {
  let data = req.body;


  TasksController.update(data, item => {

    res.json(item);
  });
};

exports.delete = (req, res) => {
  let id = Number(req.params.id);
  TasksController.delete(id, item => {

    res.json(item);
  });
};
