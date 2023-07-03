const taskRepository = require("../model/taskRepository");

function taskService() {
  return {
    getAllService: async () => taskRepository().getAllTasks(),
    createTaskService: async (payload) => {
      if (!payload.title) {
        throw new Error("título obrigatório");
      }

      const createNewTask = await taskRepository().createTask(payload);

      return createNewTask;
    },
    updateTaskStatusService: async (payload) => {
      const { id, completed } = payload;

      if (completed === undefined) {
        throw new Error("o status da atividade é obrigatório");
      }

      const updateTaskStatus = await taskRepository().updateCompleted(id, {
        completed: completed,
      });

      return updateTaskStatus;
    },
    updateTaskTitleService: async (payload) => {
      const { id, title } = payload;

      if (!title) {
        throw new Error("O titulo não pode estar vazio");
      }

      const updateTaskTitle = await taskRepository().updateTitle(id, {
        title: title,
      });

      return updateTaskTitle;
    },
    deleteTaskService: async (id) => {
      const deleteATask = await taskRepository().deleteTask(id);
      return deleteATask;
    },
  };
}

module.exports = taskService;

//Esta camada serve para tratar o dado. A parte onde ele verifica o dado e devolve uma resposta
