import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import {
  ADD_ITEM,
  FETCH_ITEMS,
  REMOVE_ALL_ITEM,
  REMOVE_ITEM,
  SET_TODO_ITEMS,
  SET_USER,
  TOGGLE_ITEM,
  UPDATE_ITEM,
  UPDATE_PRIORITY
} from "@/store/step2";

export default function useTodo() {
  const {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } = useStoreModuleMapper("step2");
  const [listLoading, appendLoading] = mapState([
    "listLoading",
    "appendLoading"
  ]);
  const [filteredTodoItems] = mapGetters(["filteredTodoItems"]);
  const [setTodoItems, setUser] = mapMutations([SET_TODO_ITEMS, SET_USER]);
  const [
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    removeItem,
    removeAllItem,
    updatePriority
  ] = mapActions([
    FETCH_ITEMS,
    ADD_ITEM,
    UPDATE_ITEM,
    TOGGLE_ITEM,
    REMOVE_ITEM,
    REMOVE_ALL_ITEM,
    UPDATE_PRIORITY
  ]);

  const resetItems = () => {
    setTodoItems([]);
    setUser(-1);
  };

  return {
    listLoading,
    appendLoading,
    filteredTodoItems,
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
