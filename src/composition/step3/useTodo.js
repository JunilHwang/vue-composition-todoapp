import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import {
  ADD_ITEM,
  FETCH_ITEMS,
  REMOVE_ALL_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  UPDATE_ITEM,
  UPDATE_PRIORITY
} from "@/store/step3";

export default function useTodo() {
  const { mapGetters, mapActions } = useStoreModuleMapper("step3");
  const [filteredTodoItems] = mapGetters(["filteredTodoItems"]);
  const [
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    updateRepository,
    removeItem,
    removeAllItem
  ] = mapActions([
    FETCH_ITEMS,
    ADD_ITEM,
    UPDATE_ITEM,
    TOGGLE_ITEM,
    UPDATE_PRIORITY,
    REMOVE_ITEM,
    REMOVE_ALL_ITEM
  ]);

  return {
    filteredTodoItems,
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    updateRepository,
    removeItem,
    removeAllItem
  };
}
