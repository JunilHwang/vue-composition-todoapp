import { reactive, toRefs } from "@vue/reactivity";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export default function useTodo() {
  const state = reactive({
    userId: null,
    todoItems: [],
    listLoading: false,
    addLoading: false
  });

  const fetchItems = async userId => {
    if (userId !== state.userId) {
      state.listLoading = true;
    }
    try {
      const items = await todoServiceOfStep2.fetchItemsByUser(userId);
      state.todoItems = items.map(({ _id, ...item }) => ({ id: _id, ...item }));
    } catch (e) {
      console.error(e);
    } finally {
      state.listLoading = false;
    }
  };

  const addItem = async (userId, contents) => {
    state.addLoading = true;
    try {
      await todoServiceOfStep2.addItemByUser(userId, contents);
      await fetchItems(userId);
    } catch (e) {
      console.error(e);
    } finally {
      state.addLoading = false;
    }
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
    ...toRefs(state),
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    removeItem,
    removeAllItem,
    updatePriorityItem
  };
}
