import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import {
  ADD_ITEM,
  ADD_MEMBER,
  FETCH_ITEMS,
  REMOVE_ALL_ITEM,
  REMOVE_ITEM,
  SET_TEAM,
  TOGGLE_ITEM,
  UPDATE_ITEM,
  UPDATE_PRIORITY
} from "@/store/step3";

export default function useTodo() {
  const { mapState, mapMutations, mapActions } = useStoreModuleMapper("step3");
  const [members, todoItems] = mapState(["members", "todoItems"]);
  const [setTeam] = mapMutations([SET_TEAM]);
  const [
    addMember,
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    updateRepository,
    removeItem,
    removeAllItem
  ] = mapActions([
    ADD_MEMBER,
    FETCH_ITEMS,
    ADD_ITEM,
    UPDATE_ITEM,
    TOGGLE_ITEM,
    UPDATE_PRIORITY,
    REMOVE_ITEM,
    REMOVE_ALL_ITEM
  ]);

  return {
    members,
    todoItems,
    setTeam,
    addMember,
    fetchItems,
    addItem,
    updateItem,
    toggleItem,
    updateRepository,
    removeItem,
    removeAllItem
  };
}
