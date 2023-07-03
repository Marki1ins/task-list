const taskService = require("../service/taskService");

async function deleteTaskController(req, res) {
  try {
    const deleteTask = await taskService().deleteTaskService(req.params.id);

    return res.status(200).json(deleteTask);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = deleteTaskController;
