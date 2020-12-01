import { reactive, toRef } from "vue";
import todoServiceOfStep1 from "@/services/todoServiceOfStep1";
import { watchEffect } from "@vue/runtime-core";

export default function useTodo() {
  const state = reactive({
    todoItems: todoServiceOfStep1.fetchTodoItems().reduce(
      (obj, item) => {
        obj.entities[item.id] = item;
        obj.ids.push(item.id);
        return obj;
      },
      { entities: {}, ids: [] }
    )
  });

  const getLastTodoId = () => {
    return Math.max(...state.todoItems.ids, 0) + 1;
  };

  const addItem = contents => {
    const { entities, ids } = state.todoItems;
    const id = getLastTodoId();
    state.todoItems = {
      entities: {
        ...entities,
        [id]: { id, contents, completed: false, editing: false }
      },
      ids: [...ids, id]
    };
  };

  const editingItem = id => {
    const { entities, ids } = state.todoItems;
    state.todoItems = {
      entities: {
        ...entities,
        [id]: { ...entities[id], editing: true }
      },
      ids: [...ids]
    };
  };

  const updateItem = ({ id, contents }) => {
    const { entities, ids } = state.todoItems;
    state.todoItems = {
      entities: {
        ...entities,
        [id]: { ...entities[id], contents, editing: false }
      },
      ids: [...ids]
    };
  };

  const deleteItem = id => {
    const { entities, ids } = state.todoItems;
    state.todoItems = {
      ids: ids.filter(v => v !== id),
      entities: Object.keys(entities).reduce((obj, v) => {
        if (v !== id) obj[v] = entities[v];
        return obj;
      }, {})
    };
  };

  const toggleItem = id => {
    const { entities, ids } = state.todoItems;
    state.todoItems = {
      entities: {
        ...entities,
        [id]: {
          ...entities[id],
          completed: !entities[id].completed
        }
      },
      ids: [...ids]
    };
  };

  watchEffect(() => {
    const { entities, ids } = state.todoItems;
    todoServiceOfStep1.putTodoItems(ids.map(id => entities[id]));
  });

  return {
    todoItems: toRef(state, "todoItems"),
    addItem,
    editingItem,
    updateItem,
    deleteItem,
    toggleItem
  };
}
