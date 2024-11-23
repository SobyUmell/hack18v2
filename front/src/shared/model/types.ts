export type SmallTask = {
  taskId: string;
  type: "small";
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
  conbanId: null | string;
};

export type LargeTask = {
  taskId: string;
  type: "large";
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
  subtasks: SmallTask[];
  conbanId: string;
  status: string;
};

export type Task = SmallTask | LargeTask;

export type Conban = {
  conbanId: string;
  name: string;
};
