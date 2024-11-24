export class SubTask {
    constructor(
        readonly subTaskId: string,
        readonly taskId: string,
        readonly text: string,
        readonly checked: boolean,
    ) {}
}
