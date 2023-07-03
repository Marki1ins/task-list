const taskService = require("../service/taskService");

async function getAllTaskController(req, res) {
  try {
    const allTasks = await taskService().getAllService();
    return res.status(200).json(allTasks);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = getAllTaskController;
