import { type Task } from '../../../core/entities/task.entity.js'
import { type EditBodyDto, TaskRepository } from '../../../core/repositories/task.repository.js'
import { type TaskModel } from '../entities/task.entity.js'
import { type SubTaskModel } from '../entities/subtask.entity.js'
import { TaskMapper } from '../mappers/task.mapper.js'

export class TaskRepositoryImpl implements TaskRepository {
    constructor(
        private readonly taskModel: typeof TaskModel,
        private readonly subTaskModel: typeof SubTaskModel,
    ) {}

    async getAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find({})
        return await Promise.all(
            tasks.map(async (el) => TaskMapper.toDomain(el, await this.subTaskModel.findOne({ taskId: el.id }))),
        )
    }
    async getOneById(taskId: string): Promise<Task> {
        const task = await this.taskModel.findById(taskId)
        return TaskMapper.toDomain(task, await this.subTaskModel.findOne({ taskId: task.id }))
    }
    async createOne(createBodyDto: Omit<Task, 'taskId' | 'subTasks'>): Promise<Task> {
        return TaskMapper.toDomain(await this.taskModel.create(createBodyDto), [])
    }
    async editOne(taskId: string, editBodyDto: EditBodyDto): Promise<void> {
        await this.taskModel.findOneAndUpdate({ taskId }, { ...editBodyDto })
    }
    async deleteOne(taskId: string): Promise<void> {
        await this.taskModel.findByIdAndDelete(taskId)
    }
}
