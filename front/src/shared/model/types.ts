export type Task = {
  taskId: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
  subtasks: Record<string, Subtask>;
  status: string;
};
export type Subtask = {
  taskId: string;
  text: string;
  checked: boolean;
};

export type Conban = {
  conbanId: string;
  name: string;
};

export type Metric = {
  metricId: string;
  taskId: string;
  data: any;
};
