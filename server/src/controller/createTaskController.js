const taskService = require("../service/taskService");

async function createTaskController(req, res) {
  try {
    const newTask = await taskService().createTaskService(req.body);

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = createTaskController;
