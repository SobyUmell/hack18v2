export type SmallTask = {
  type: "small";
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
  conban: null | string;
};

export type LargeTask = {
  type: "large";
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
  subtasks: SmallTask[];
  conban: string;
};
