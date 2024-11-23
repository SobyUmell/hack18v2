export type SmallTask = {
  type: "small";
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
};

export type LargeTask = {
  type: "large";
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  tags: string[];
  subtasks: SmallTask[];
};
