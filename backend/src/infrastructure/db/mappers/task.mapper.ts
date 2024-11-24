import { type SubTask } from '../../../core/entities/subtask.entity.js'
import { Task } from '../../../core/entities/task.entity.js'
import { Task as TaskModel } from '../entities/task.entity.js'

export class TaskMapper {
    static toDomain(model: TaskModel, subTasks: SubTask[]): Task {
        return new Task(
            model.taskId,
            model.name,
            model.description,
            model.startDate,
            model.endDate,
            model.tags,
            subTasks,
            model.status,
        )
    }
}
