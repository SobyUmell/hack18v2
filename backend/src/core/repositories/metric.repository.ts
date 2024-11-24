import { type Metric } from '../entities/metric.entity.js'

export interface MetricRepository {
    getOneById(taskId: string): Promise<Metric>
    deleteOne(taskId: string): Promise<void>
}
