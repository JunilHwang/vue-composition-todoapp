import { reactive, toRefs } from "@vue/reactivity";

import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export default function useTodo() {
  const state = reactive({
    nowUserId: null,
    todoItems: [],
    listLoading: false,
    addLoading: false
  });

  const fetchItems = async (userId = state.nowUserId) => {
    if (userId !== state.nowUserId) {
      state.listLoading = true;
      state.nowUserId = userId;
    }
    try {
      const items = await todoServiceOfStep2.fetchItemsByUser(userId);
      state.todoItems = items.map(({ _id, ...item }) => ({ id: _id, ...item }));
    } catch (e) {
      state.todoItems = [];
      console.error(e);
    } finally {
      state.listLoading = false;
    }
  };

  const resetItems = () => {
    state.todoItems = [];
    state.nowUserId = null;
  };

  const addItem = async contents => {
    state.addLoading = true;
    try {
      await todoServiceOfStep2.addItemByUser(state.nowUserId, contents);
      await fetchItems();
    } catch (e) {
      console.error(e);
    } finally {
      state.addLoading = false;
    }
  };

  const updateItem = async (itemId, contents) => {
    await todoServiceOfStep2.updateItemByUserIdAndItemId(
      state.nowUserId,
      itemId,
      contents
    );
    await fetchItems();
  };

  const toggleItem = async itemId => {
    console.log(itemId);
    await todoServiceOfStep2.toggleItemByUserIdAndItemId(
      state.nowUserId,
      itemId
    );
    await fetchItems();
  };

  const removeItem = async itemId => {
    await todoServiceOfStep2.removeUserItemById(state.nowUserId, itemId);
    await fetchItems();
  };

  const removeAllItem = async () => {
    await todoServiceOfStep2.removeUserItems(state.nowUserId);
    await fetchItems();
  };

  const updatePriority = async (itemId, priority) => {
    await todoServiceOfStep2.updateItemPriorityByUserIdAndItemId(
      state.nowUserId,
      itemId,
      priority
    );
    await fetchItems();
  };

  return {
    ...toRefs(state),
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    removeItem,
    removeAllItem,
    updatePriority,
    resetItems
  };
}
