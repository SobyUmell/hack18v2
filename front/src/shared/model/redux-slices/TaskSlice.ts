import { createSlice } from "@reduxjs/toolkit";
import { type Task, type Conban } from "../types";

type InitialState = {
  tasks: Task[];
  conbans: Conban[];
};

const initialState: InitialState = {
  tasks: [
    {
      taskId: "task_1",
      name: "one",
      description: "description 1",
      startDate: new Date(),
      endDate: new Date(2024, 11, 25),
      tags: ["one", "two", "three"],
      subtasks: {
        sub1: {
          taskId: "sub1",
          text: "sub1",
          checked: false,
        },
      },
      status: "in progress",
      conbanId: "general_12345",
    },
  ],
  conbans: [{ name: "Главная", conbanId: "general_12345" }],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload.task);
    },
    changeTaskConban: (state, action) => {
      const mutated = state.tasks.map((task) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            conbanId: action.payload.conbanId,
          };
        }
        return task;
      });
    },
    delTask: (state, action) => {
      const ntasks: Task[] = state.tasks.filter((task: Task) => {
        return task.taskId !== action.payload.targetId;
      });
      state.tasks = ntasks;
    },
    addConban: (state, action) => {
      state.conbans.push(action.payload.conban);
    },
    delConban: (state, action) => {
      const nconbans: Conban[] = state.conbans.filter((conban: Conban) => {
        return conban.conbanId !== action.payload.targetId;
      });
      state.conbans = nconbans;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, delTask, changeTaskConban, addConban, delConban } =
  taskSlice.actions;

export default taskSlice.reducer;
