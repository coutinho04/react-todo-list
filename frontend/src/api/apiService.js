import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

const getTasksByYearMonth = async (year, month) => {
  const res = await axios.get(`${API_URL}?year=${year}&month=${month}`);

  const toDo = res.data;
  toDo
    .sort((a, b) => {
      return a.day - b.day;
    })
    .sort((a, b) => {
      return a.month - b.month;
    });

  return toDo;
};

const getTask = async (id) => {
  const res = await axios.get(`${API_URL}?id=${id}`);
  const task = res.data;
  return task;
};

const putTaskDone = async (task) => {
  const { id, done } = task;
  const url = `${API_URL}/${id}`;
  const newTodo = { ...task, done: !done };

  const res = await axios.put(url, newTodo);
  return res.status === 200;
};

export { getTasksByYearMonth, getTask, putTaskDone };
