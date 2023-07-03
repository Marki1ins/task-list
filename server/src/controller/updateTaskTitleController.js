const taskService = require("../service/taskService");

async function updateTaskTitle(req, res) {
  try {
    const updateTaskTitle = await taskService().updateTaskTitleService({
      id: req.params.id,
      ...req.body,
    });

    return res.status(200).json(updateTaskTitle);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = updateTaskTitle;
