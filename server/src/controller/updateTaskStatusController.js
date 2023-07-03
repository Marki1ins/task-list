const taskService = require("../service/taskService");

async function updateTaskController(req, res) {
  try {
    const updateTaskStatus = await taskService().updateTaskStatusService({
      id: req.params.id,
      ...req.body,
    });

    return res.status(200).json(updateTaskStatus);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = updateTaskController;
