import { todoClient } from "@/clients/todoClient";

export const fetchUsers = () => todoClient.get("/users");

export const addUser = name => todoClient.post("/users", { name });

export const fetchUser = userId => todoClient.get(`/users/${userId}`);

export const removeUser = userId => todoClient.delete(`/users/${userId}`);

export const fetchItemsByUser = userId =>
  todoClient.get(`/users/${userId}/items`);

export const addItemByUser = (userId, contents) =>
  todoClient.post(`/users/${userId}/items`, { contents });

export const removeUserItems = userId =>
  todoClient.delete(`/users/${userId}/items`);

export const removeUserItemById = (userId, itemId) =>
  todoClient.delete(`/users/${userId}/items/${itemId}`);

export const updateItemByUserIdAndItemId = (userId, itemId, contents) =>
  todoClient.put(`/users/${userId}/items/${itemId}`, { contents });

export const updateItemPriorityByUserIdAndItemId = (userId, itemId, priority) =>
  todoClient.put(`/users/${userId}/items/${itemId}/priority`, { priority });

export const toggleItemByUserIdAndItemId = (userId, itemId) =>
  todoClient.put(`/users/${userId}/items/${itemId}/toggle`);

export default {
  fetchUsers,
  addUser,
  fetchUser,
  removeUser,
  fetchItemsByUser,
  addItemByUser,
  removeUserItems,
  removeUserItemById,
  updateItemByUserIdAndItemId,
  updateItemPriorityByUserIdAndItemId,
  toggleItemByUserIdAndItemId
};
