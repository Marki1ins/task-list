const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function taskRepository() {
  return {
    getAllTasks: async () => prisma.task.findMany(),
    createTask: async (data) => prisma.task.create({ data: { ...data } }),
    updateCompleted: async (id, data) =>
      prisma.task.update({ where: { id }, data: { ...data } }),
    updateTitle: async (id, data) =>
      prisma.task.update({ where: { id }, data: { ...data } }),
    deleteTask: async (id) => prisma.task.delete({ where: { id } }),
  };
}

module.exports = taskRepository;

//Camada que serve para comunicar com o banco de dados
