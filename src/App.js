import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { nanoid } from "nanoid";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const person = { id: nanoid(), task };
      setTasklist((tasklist) => {
        return [...tasklist, person];
      });

      setTask("");
    }
  };

  const removeTask = (id) => {
    const newList = tasklist.filter((item) => item.id !== id);

    setTasklist(newList);
  };
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <h2>Todo List</h2>
      <h4>Enter your task here</h4>
      <TextField
        id="outlined-basic"
        label="Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Task <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </Button>
      {tasklist.map((person) => {
        const { id, task } = person;
        return (
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            key={id}
          >
            <h4>{task}</h4>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeTask(id)}
            >
              <DeleteIcon></DeleteIcon>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
