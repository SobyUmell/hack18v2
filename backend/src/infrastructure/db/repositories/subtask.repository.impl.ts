import { SubTask } from '../../../core/entities/subtask.entity.js'
import { type EditBodyDto, SubTaskRepository } from '../../../core/repositories/subtask.repository.js'
import { type SubTaskModel } from '../entities/subtask.entity.js'
import { SubTaskMapper } from '../mappers/subtask.mapper.js'

export class SubTaskRepositoryImpl implements SubTaskRepository {
    constructor(private readonly subTaskModel: typeof SubTaskModel) {}

    async getAll(taskId: string): Promise<SubTask[]> {
        const subtasks = await this.subTaskModel.find({ taskId })
        return subtasks.map((el) => SubTaskMapper.toDomain(el))
    }
    async createOne(createBodyDto: Omit<SubTask, 'subTaskId'>): Promise<SubTask> {
        return SubTaskMapper.toDomain(await this.subTaskModel.create(createBodyDto))
    }
    async editOne(subTaskId: string, editBodyDto: EditBodyDto): Promise<void> {
        await this.subTaskModel.findByIdAndUpdate({ subTaskId }, { ...editBodyDto })
    }
    async deleteOne(subTaskId: string): Promise<void> {
        await this.subTaskModel.findByIdAndDelete(subTaskId)
    }
    async deleteMany(taskId: string): Promise<void> {
        await this.subTaskModel.deleteMany({ taskId })
    }
}
