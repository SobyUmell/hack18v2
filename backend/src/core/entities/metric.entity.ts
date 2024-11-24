export class Metric {
    constructor(
        readonly metricId: string,
        readonly taskId: string,
        readonly data: any,
    ) {}
}
