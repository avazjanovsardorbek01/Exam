import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/system";

const statuses = ["open", "pending", "inprog", "complete"];

const Container = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "#f4f6f8",
  minHeight: "100vh",
}));

const TaskCard = styled(Card)(({ theme }) => ({
  marginBottom: "20px",
  backgroundColor: "#ffffff",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const StatusColumn = styled(Grid)(({ theme }) => ({
  padding: "10px",
  backgroundColor: "#e3f2fd",
  borderRadius: "10px",
  minHeight: "70vh",
}));

const TaskInputContainer = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const CardsContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  gap: "20px",
}));

const Cards = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", status: "open" });

  const addTask = () => {
    if (newTask.title.trim() !== "") {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: "", status: "open" });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeTaskStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ color: "#424242" }}>
        Task Management
      </Typography>
      <TaskInputContainer>
        <TextField
          label="Task Title"
          variant="outlined"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          sx={{ flex: 1 }}
        />
        <TextField
          select
          label="Status"
          variant="outlined"
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          sx={{ width: "150px" }}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={addTask}
        >
          Add Task
        </Button>
      </TaskInputContainer>
      <CardsContainer container spacing={2}>
        {statuses.map((status) => (
          <Grid item xs={12} sm={6} md={3} key={status}>
            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Typography>
            <StatusColumn>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskCard key={task.id}>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#424242" }}>
                        {task.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <TextField
                        select
                        value={task.status}
                        onChange={(e) =>
                          changeTaskStatus(task.id, e.target.value)
                        }
                        sx={{ marginRight: "10px", width: "150px" }}
                      >
                        {statuses.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </TextField>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => deleteTask(task.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </TaskCard>
                ))}
            </StatusColumn>
          </Grid>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Cards;
