import { reactive, toRef } from "@vue/reactivity";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export default function useTodo() {
  const state = reactive({
    todoItems: []
  });

  const fetchItems = async userId => {
    const items = await todoServiceOfStep2.fetchItemsByUser(userId);
    state.todoItems = items.map(({ _id, ...item }) => ({ id: _id, ...item }));
  };

  const addItem = async (userId, contents) => {
    await todoServiceOfStep2.addItemByUser(userId, contents);
    await fetchItems(userId);
  };

  const updateItem = async (userId, itemId, contents) => {
    await todoServiceOfStep2.updateItemByUserIdAndItemId(
      userId,
      itemId,
      contents
    );
    await fetchItems(userId);
  };

  const toggleItem = async (userId, itemId) => {
    await todoServiceOfStep2.toggleItemByUserIdAndItemId(userId, itemId);
    await fetchItems(userId);
  };

  const removeItem = async (userId, itemId) => {
    await todoServiceOfStep2.removeUserItemById(userId, itemId);
    await fetchItems(userId);
  };

  const removeAllItem = async userId => {
    await todoServiceOfStep2.removeUserItems(userId);
    await fetchItems(userId);
  };

  const updatePriorityItem = async (userId, itemId, priority) => {
    await todoServiceOfStep2.updateItemPriorityByUserIdAndItemId(
      userId,
      itemId,
      priority
    );
    await fetchItems(userId);
  };

  return {
    todoItems: toRef(state, "todoItems"),
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    removeItem,
    removeAllItem,
    updatePriorityItem
  };
}
