import { type Task } from '../entities/task.entity.js'
import { type EditBodyDto, type TaskRepository } from '../repositories/task.repository.js'

export class TaskService {
    constructor(private readonly taskRepository: TaskRepository) {}

    getAll = async () => {
        return await this.taskRepository.getAll()
    }

    getOneById = async (taskId: string) => {
        return await this.taskRepository.getOneById(taskId)
    }

    createOne = async (createBodyDto: Omit<Task, 'taskId' | 'subTasks'>) => {
        return await this.taskRepository.createOne(createBodyDto)
    }

    editOne = async (taskId: string, editBodyDto: EditBodyDto) => {
        return await this.taskRepository.editOne(taskId, editBodyDto)
    }

    deleteOne = async (taskId: string) => {
        return await this.taskRepository.deleteOne(taskId)
    }
}
