import React, { useState } from "react";
import { TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import s from "./LargeTaskEdit.module.scss";

type Props = {};

const TaskEdit = (props: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [tags, setTags] = useState<[] | string[]>([]);
  return (
    <div className={s.task_edit}>
      <div className={s.title}>
        <TextField
          id="standard-basic"
          label="Название задачи"
          variant="standard"
        />
      </div>
      <div className={s.description}>
        <TextField
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
      <div className={s.conban}></div>
    </div>
  );
};

export default TaskEdit;
