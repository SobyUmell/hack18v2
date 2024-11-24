import { type SubTask } from '../entities/subtask.entity.js'
import { type EditBodyDto, type SubTaskRepository } from '../repositories/subtask.repository.js'

export class SubTaskService {
    constructor(private readonly subTaskRepository: SubTaskRepository) {}

    getAll = async (taskId: string) => {
        return await this.subTaskRepository.getAll(taskId)
    }

    createOne = async (createBodyDto: Omit<SubTask, 'subTaskId'>) => {
        return await this.subTaskRepository.createOne(createBodyDto)
    }

    editOne = async (subTaskId: string, editBodyDto: EditBodyDto) => {
        return await this.subTaskRepository.editOne(subTaskId, editBodyDto)
    }

    deleteOne = async (subTaskId: string) => {
        return await this.subTaskRepository.deleteOne(subTaskId)
    }

    deleteMany = async (taskId: string) => {
        return await this.subTaskRepository.deleteMany(taskId)
    }
}
