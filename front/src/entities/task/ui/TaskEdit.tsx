import React, { useEffect, useState } from "react";
import { TextField, Checkbox, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import s from "./TaskEdit.module.scss";
import { useAppSelector } from "../../../shared/model";
import { type Subtask } from "../../../shared/model/types";

import uuid from "react-uuid";
type Props = {
  create: boolean;
};

const TaskEdit = ({ create }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [tags, setTags] = useState<[] | string[]>([]);
  const [conban, setConban] = useState<string>("Главная");
  const [subtasks, setSubtasks] = useState<Record<string, Subtask>>({});
  const [curts, setCurts] = useState<string>("");

  const conbans = useAppSelector((state) => state.task.conbans);

  const handleConbanChange = (event: SelectChangeEvent) => {
    setConban(event.target.value as string);
  };
  const handleSubtaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurts(event.target.value);
  };

  const handleSubtaskEdit = (text: string, new_obj: Subtask) => {
    const changed = subtasks[new_obj.taskId];
    changed.text = text;
    setSubtasks({ ...subtasks, [new_obj.taskId]: changed });
  };
  const handleNewSubtask = (event: React.MouseEvent<HTMLElement>) => {
    const taskId = uuid();
    const obj = { taskId, text: curts, checked: false };
    setSubtasks({ ...subtasks, [taskId]: obj });
    console.log(subtasks);
  };

  const deleteSubtask = (taskId: string) => {
    const changed: Record<string, Subtask> = subtasks;
    delete changed[taskId];
    setSubtasks(changed);
  };

  return (
    <div className={s.task_edit}>
      <div className={s.title}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Название задачи"
          variant="standard"
        />
      </div>
      <div className={s.description}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Описание задачи"
          multiline
          maxRows={4}
        />
      </div>
      <div className={s.date}>
        <div className={s.date_start}>
          <h3 className={s.start_title}>Дата начала</h3>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
          />
        </div>
        <div className={s.date_end}>
          <h3 className={s.end_title}>Дата конца</h3>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
          />
        </div>
      </div>
      <div className={s.tags}>
        <h3 className={s.tags_title}>Теги</h3>
        <TagsInput value={tags} onChange={(tags) => setTags(tags)} />
      </div>
      <div className={s.conban}>
        <h3 className={s.tags_title}>Доска</h3>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={conban}
          onChange={handleConbanChange}
        >
          <MenuItem value={"Главная"}>Главная</MenuItem>
          {conbans.map((cn) => {
            return (
              <MenuItem value={cn.name} key={cn.conbanId}>
                {cn.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className={s.subtasks}>
        <div className={s.create_task}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Название подзадачи"
            variant="standard"
            value={curts}
            onChange={handleSubtaskChange}
          />
          <Button variant="contained" onClick={handleNewSubtask}>
            СОЗДАТЬ
          </Button>
        </div>

        <div className={s.list}>
          {Object.values(subtasks).map((st: Subtask) => {
            return (
              <div className={s.subtask} key={st.taskId}>
                <div className={s.content}>
                  <Checkbox
                    color="success"
                    checked={st.checked}
                    disabled={create}
                  />
                  <TextField
                    fullWidth
                    id="standard-basic"
                    value={st.text}
                    variant="standard"
                    onChange={(e) => handleSubtaskEdit(e.target.value, st)}
                  />
                </div>
                <IconButton
                  onClick={() => deleteSubtask(st.taskId)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            );
          })}
        </div>
        <Button variant="contained" color="success">
          СОЗДАТЬ ЗАДАЧУ
        </Button>
      </div>
    </div>
  );
};

export default TaskEdit;
