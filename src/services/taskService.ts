import axios from 'axios';

import { Task } from '../types/Task';

const api = axios.create({
  baseURL: 'https://dummyjson.com/todos',
});

export const getTasks = async () => {
  const response = await api.get('/');
  console.log(response);
  return response.data.todos;
};

export const getTaskById = async (id: number) => {
  const response = await api.get(`/${id}`);
  console.log(response);
  return response.data.todos;
};

export const createTask = async (taskData: Omit<Task, "id">): Promise<Task> => {
  const response = await api.post('/add', taskData);
  console.log(response);
  return response.data;
};

export const updateTask = async (id: number) => {
  const response = await api.put(`/${id}`, {completed: false});
  console.log(response);
  return response.data.todos;
};

export const deleteTask = async (id: number) => {
  const response = await api.delete(`/${id}`);
  console.log("deleteresponse", response);
  return response.data.id;
};