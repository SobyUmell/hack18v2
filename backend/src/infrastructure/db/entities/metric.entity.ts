import { getModelForClass, prop } from '@typegoose/typegoose'
import { v4 } from 'uuid'

class Metric {
    @prop({ default: v4() })
    metricId: string

    @prop()
    taskId: string

    @prop()
    data: any
}

export const MetricModel = getModelForClass(Metric)
