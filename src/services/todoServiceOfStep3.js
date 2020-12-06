import { todoClient } from "@/clients/todoClient";

/** Teams **/
export const fetchTeams = () => todoClient.get("/teams");

export const fetchTeam = teamId => todoClient.get(`/teams/${teamId}`);

export const addTeam = name => todoClient.post("/teams", { name });

export const removeTeam = teamId => todoClient.post(`/teams/${teamId}`);

/** Todos **/
export const addMember = (teamId, name) =>
  todoClient.post(`/teams/${teamId}/members`, { name });

export const fetchItems = (teamId, memberId) =>
  todoClient.get(`/teams/${teamId}/members/${memberId}`);

export const addItem = (teamId, memberId, contents) =>
  todoClient.post(`/teams/${teamId}/members/${memberId}/items`, { contents });

export const updateItem = (teamId, memberId, itemId, contents) =>
  todoClient.put(`/teams/${teamId}/members/${memberId}/items/${itemId}`, {
    contents
  });

export const toggleItem = (teamId, memberId, itemId) =>
  todoClient.put(`/teams/${teamId}/members/${memberId}/items/${itemId}/toggle`);

export const updatePriority = (teamId, memberId, itemId, priority) =>
  todoClient.put(
    `/teams/${teamId}/members/${memberId}/items/${itemId}/priority`,
    { priority }
  );

export const removeItem = (teamId, memberId, itemId) =>
  todoClient.delete(`/teams/${teamId}/members/${memberId}/items/${itemId}`);

export const removeAllItem = (teamId, memberId) =>
  todoClient.delete(`/teams/${teamId}/members/${memberId}/items`);

export default {
  fetchTeams,
  fetchTeam,
  addTeam,
  removeTeam,
  addMember,
  fetchItems,
  addItem,
  updateItem,
  toggleItem,
  updatePriority,
  removeItem,
  removeAllItem
};
