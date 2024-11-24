import { getModelForClass, prop } from '@typegoose/typegoose'
import { v4 } from 'uuid'

export class SubTask {
    @prop({ type: () => String, default: v4() })
    subTaskId: string

    @prop({ type: () => String })
    taskId: string

    @prop({ type: () => String })
    text: string

    @prop({ type: () => Boolean, default: false })
    checked: boolean
}

export const SubTaskModel = getModelForClass(SubTask)
