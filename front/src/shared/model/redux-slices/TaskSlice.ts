import { createSlice } from "@reduxjs/toolkit";
import { type Task, type Conban } from "../types";

type InitialState = {
  tasks: Task[];
  conbans: Conban[];
};

const initialState: InitialState = {
  tasks: [],
  conbans: [{ name: "what", conbanId: "what" }],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload.task);
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
export const { addTask, delTask } = taskSlice.actions;

export default taskSlice.reducer;
