const express = require("express");

const getAllTaskController = require("../controller/getAllTaskController");
const createTaskController = require("../controller/createTaskController");
const updateTaskController = require("../controller/updateTaskStatusController");
const updateTaskTitle = require("../controller/updateTaskTitleController");
const deleteTaskController = require("../controller/deleteTaskController");

const router = express.Router();

router.get("/", getAllTaskController);

router.post("/", createTaskController);

router.put("/:id/completed", updateTaskController);

router.put("/:id/title", updateTaskTitle);

router.delete("/:id", deleteTaskController);

module.exports = router;
