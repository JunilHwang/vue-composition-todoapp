import { reactive, toRef } from "vue";

export default function useTodo() {
  const state = reactive({
    todoItems: {
      entities: {
        1: {
          id: 1,
          contents: "아이템 01",
          editing: false,
          completed: false
        },
        2: {
          id: 2,
          contents: "아이템 02",
          editing: true,
          completed: false
        },
        3: {
          id: 3,
          contents: "아이템 03",
          editing: false,
          completed: true
        }
      },
      ids: [1, 2, 3]
    }
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

  return {
    todoItems: toRef(state, "todoItems"),
    addItem,
    editingItem,
    updateItem,
    deleteItem,
    toggleItem
  };
}
