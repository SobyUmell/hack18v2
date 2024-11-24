import { SubTask } from '../../../core/entities/subtask.entity.js'
import { SubTask as SubTaskModel } from '../entities/subtask.entity.js'

export class SubTaskMapper {
    static toDomain(model: SubTaskModel): SubTask {
        return new SubTask(model.subTaskId, model.taskId, model.text, model.checked)
    }
}
