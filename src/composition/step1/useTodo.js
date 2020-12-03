import useStoreModuleMapper from "@/composition/store/useStoreModuleMapper";
import { SET_TODO_ITEMS } from "@/store/step1";

export default function useTodo() {
  const { mapState, mapMutations } = useStoreModuleMapper("step1");
  const [todoItems] = mapState(["todoItems"]);
  const [setTodoItems] = mapMutations([SET_TODO_ITEMS]);

  const addItem = contents => {
    const { entities, ids } = todoItems.value;
    const id = Math.max(...ids, 0) + 1;
    setTodoItems({
      entities: {
        ...entities,
        [id]: { id, contents, completed: false, editing: false }
      },
      ids: [...ids, id]
    });
  };

  const editingItem = id => {
    const { entities, ids } = todoItems.value;
    setTodoItems({
      entities: {
        ...entities,
        [id]: { ...entities[id], editing: true }
      },
      ids: [...ids]
    });
  };

  const updateItem = ({ id, contents }) => {
    const { entities, ids } = todoItems.value;
    setTodoItems({
      entities: {
        ...entities,
        [id]: { ...entities[id], contents, editing: false }
      },
      ids: [...ids]
    });
  };

  const deleteItem = id => {
    const { entities, ids } = todoItems.value;
    setTodoItems({
      ids: ids.filter(v => v !== id),
      entities: Object.keys(entities).reduce((obj, v) => {
        if (v !== id) obj[v] = entities[v];
        return obj;
      }, {})
    });
  };

  const toggleItem = id => {
    const { entities, ids } = todoItems.value;
    setTodoItems({
      entities: {
        ...entities,
        [id]: {
          ...entities[id],
          completed: !entities[id].completed
        }
      },
      ids: [...ids]
    });
  };

  return {
    addItem,
    editingItem,
    updateItem,
    deleteItem,
    toggleItem
  };
}
