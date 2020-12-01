import { todoClient } from "@/clients/todoClient";

export const fetchUsers = () => todoClient.get("/users");

export const addUser = name => todoClient.post("/users", { name });

export const fetchUser = userId => todoClient.get(`/user/${userId}`);

export const removeUser = userId => todoClient.delete(`/user/${userId}`);

export const fetchItemsByUser = userId =>
  todoClient.get(`/user/${userId}/items`);

export const removeUserItems = userId =>
  todoClient.delete(`/user/${userId}/items`);

export const removeUserItemById = (userId, itemId) =>
  todoClient.delete(`/user/${userId}/items/${itemId}`);

export const updateItemByUserIdAndItemId = (userId, itemId, contents) =>
  todoClient.put(`/user/${userId}/items/${itemId}`, { contents });

export const updateItemPriorityByUserIdAndItemId = (userId, itemId, priority) =>
  todoClient.put(`/user/${userId}/items/${itemId}/priority`, { priority });

export const toggleItemByUserIdAndItemId = (userId, itemId) =>
  todoClient.put(`/user/${userId}/items/${itemId}/toggle`);

export default {
  fetchUsers,
  addUser,
  fetchUser,
  removeUser,
  fetchItemsByUser,
  removeUserItems,
  removeUserItemById,
  updateItemByUserIdAndItemId,
  updateItemPriorityByUserIdAndItemId,
  toggleItemByUserIdAndItemId
};
