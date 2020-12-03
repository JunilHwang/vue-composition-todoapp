import { reactive, toRefs } from "@vue/reactivity";

import todoServiceOfStep2 from "@/services/todoServiceOfStep2";
import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import {ADD_ITEM, FETCH_ITEMS, SET_TODO_ITEMS, SET_USER, UPDATE_ITEM} from "@/store/step2";

export default function useTodo() {
  const { mapActions, mapMutations } = useStoreModuleMapper("step2");
  const [setTodoItems, setUser] = mapMutations([SET_TODO_ITEMS, SET_USER]);
  const [fetchItems, addItem, updateItem] = mapActions([FETCH_ITEMS, ADD_ITEM, UPDATE_ITEM]);

  const resetItems = () => {
    setTodoItems([]);
    setUser(-1);
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
