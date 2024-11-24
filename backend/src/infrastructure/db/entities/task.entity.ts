import { getModelForClass, prop } from '@typegoose/typegoose'
import { v4 } from 'uuid'

export class Task {
    @prop({ type: () => String, default: v4() })
    taskId: string

    @prop({ type: () => String })
    name: string

    @prop({ type: () => String })
    description: string

    @prop({ type: () => Date })
    startDate: Date

    @prop({ type: () => Date })
    endDate: Date

    @prop({ type: () => String, default: [] })
    tags: string[]

    @prop({ type: () => String })
    status: string
}

export const TaskModel = getModelForClass(Task)
