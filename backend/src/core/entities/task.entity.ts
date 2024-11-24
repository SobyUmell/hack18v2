import { SubTask } from './subtask.entity.js'

export class Task {
    constructor(
        readonly taskId: string,
        readonly name: string,
        readonly description: string,
        readonly startDate: Date,
        readonly endDate: Date,
        readonly tags: string[],
        readonly subTasks: SubTask[],
        readonly status: string,
    ) {}
}
