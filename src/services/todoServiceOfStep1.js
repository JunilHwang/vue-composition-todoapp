import repository from "../repository";
import { FilterTypes } from "@/constants";

const KEY = "STEP1_TODO_REPOSITORY";

export const fetchTodoItems = () => {
  return repository.get(KEY)?.todoItems || [];
};

export const fetchFilterType = () => {
  return repository.get(KEY)?.filterType || FilterTypes.ALL;
};

export const putTodoItems = todoItems => {
  const todoData = repository.get(KEY) || {};
  repository.set(KEY, { ...todoData, todoItems });
};

export const putFilterType = filterType => {
  const todoData = repository.get(KEY) || {};
  repository.set(KEY, { ...todoData, filterType });
};

export default {
  fetchTodoItems,
  fetchFilterType,
  putTodoItems,
  putFilterType
};
