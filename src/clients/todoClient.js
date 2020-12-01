import axios from "axios";

export const todoClient = axios.create({
  baseURL: "https://js-todo-list-9ca3a.df.r.appspot.com/api",
  timeout: 5000
});

todoClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
