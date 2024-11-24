import { type SubTask } from '../entities/subtask.entity.js'

export class EditBodyDto {
    constructor(
        readonly text?: string,
        readonly checked?: false,
    ) {}
}

export interface SubTaskRepository {
    getAll(taskId: string): Promise<SubTask[]>
    createOne(createBodyDto: Omit<SubTask, 'subTaskId'>): Promise<SubTask>
    editOne(subTaskId: string, editBodyDto: EditBodyDto): Promise<void>
    deleteOne(subTaskId: string): Promise<void>
    deleteMany(taskId: string): Promise<void>
}
