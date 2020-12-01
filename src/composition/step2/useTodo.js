import { reactive, toRefs } from "@vue/reactivity";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";
import useUser from "@/composition/step2/useUser";

export default function useTodo() {
  const { selectedUserId } = useUser();
  const state = reactive({
    nowUserId: null,
    todoItems: [],
    listLoading: false,
    addLoading: false
  });

  const fetchItems = async userId => {
    if (userId !== state.nowUserId) {
      state.listLoading = true;
    }
    try {
      const items = await todoServiceOfStep2.fetchItemsByUser(userId);
      state.todoItems = items.map(({ _id, ...item }) => ({ id: _id, ...item }));
      state.nowUserId = userId;
    } catch (e) {
      console.error(e);
    } finally {
      state.listLoading = false;
    }
  };

  const resetItems = () => {
    state.todoItems = [];
  };

  const addItem = async contents => {
    state.addLoading = true;
    try {
      await todoServiceOfStep2.addItemByUser(selectedUserId.value, contents);
      await fetchItems(selectedUserId.value);
    } catch (e) {
      console.error(e);
    } finally {
      state.addLoading = false;
    }
  };

  const updateItem = async (itemId, contents) => {
    await todoServiceOfStep2.updateItemByUserIdAndItemId(
      selectedUserId.value,
      itemId,
      contents
    );
    await fetchItems(selectedUserId.value);
  };

  const toggleItem = async itemId => {
    await todoServiceOfStep2.toggleItemByUserIdAndItemId(
      selectedUserId.value,
      itemId
    );
    await fetchItems(selectedUserId.value);
  };

  const removeItem = async itemId => {
    await todoServiceOfStep2.removeUserItemById(selectedUserId.value, itemId);
    await fetchItems(selectedUserId);
  };

  const removeAllItem = async () => {
    await todoServiceOfStep2.removeUserItems(selectedUserId.value);
    await fetchItems(selectedUserId.value);
  };

  const updatePriority = async (itemId, priority) => {
    await todoServiceOfStep2.updateItemPriorityByUserIdAndItemId(
      selectedUserId.value,
      itemId,
      priority
    );
    await fetchItems(selectedUserId.value);
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
