import todoServiceOfStep1 from "@/services/todoServiceOfStep1";

export const SET_TODO_ITEMS = "SET_TODO_ITEMS";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

const step1 = {
  state: {
    todoItems: todoServiceOfStep1.fetchTodoItems().reduce(
      (obj, item) => {
        obj.entities[item.id] = item;
        obj.ids.push(item.id);
        return obj;
      },
      { entities: {}, ids: [] }
    ),
    filterType: todoServiceOfStep1.fetchFilterType()
  },

  mutations: {
    [SET_TODO_ITEMS](state, todoItems) {
      state.todoItems = todoItems;
      const { ids, entities } = todoItems;
      todoServiceOfStep1.putTodoItems(ids.map(id => entities[id]));
    },
    [SET_FILTER_TYPE](state, filterType) {
      state.filterType = filterType;
      todoServiceOfStep1.putFilterType(filterType);
    }
  }
};

export default step1;
