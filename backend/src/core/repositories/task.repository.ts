import { type Task } from '../entities/task.entity.js'

export class EditBodyDto {
    constructor(
        readonly name?: string,
        readonly description?: string,
        readonly startDate?: Date,
        readonly endDate?: Date,
        readonly tags?: string[],
        readonly status?: string,
    ) {}
}

export interface TaskRepository {
    getAll(): Promise<Task[]>
    getOneById(taskId: string): Promise<Task>
    createOne(createBodyDto: Omit<Task, 'taskId' | 'subTasks'>): Promise<Task>
    editOne(taskId: string, editBodyDto: EditBodyDto): Promise<void>
    deleteOne(taskId: string): Promise<void>
}
