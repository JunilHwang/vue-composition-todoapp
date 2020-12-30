import { FilterTypes } from "@/constants";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const SET_TODO_ITEMS = "SET_TODO_ITEMS";
export const SET_LIST_LOADING = "SET_LIST_LOADING";
export const SET_APPEND_LOADING = "SET_APPEND_LOADING";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const FETCH_ITEMS = "FETCH_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL_ITEM = "REMOVE_ALL_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_PRIORITY = "UPDATE_PRIORITY";

const step2 = {
  namespaced: true,
  state: {
    users: [],
    selectedUserId: null,
    todoItems: [],
    listLoading: false,
    appendLoading: false,
    filterType: FilterTypes.ALL
  },

  getters: {
    orderedUsers: ({ users }) =>
      [...users].sort((a, b) => (a.name < b.name ? 1 : -1)),

    selectedUser: ({ users, selectedUserId }) =>
      users.find(({ id }) => id === selectedUserId),

    filteredTodoItems: ({ filterType, todoItems }) =>
      todoItems.filter(
        ({ isCompleted }) =>
          (filterType === FilterTypes.COMPLETED && isCompleted) ||
          (filterType === FilterTypes.ACTIVE && !isCompleted) ||
          filterType === FilterTypes.ALL
      )
  },

  mutations: {
    [SET_USERS](state, users) {
      state.users = users;
    },
    [SET_USER](state, selectedUserId) {
      state.selectedUserId = selectedUserId;
    },
    [SET_TODO_ITEMS](state, todoItems) {
      state.todoItems = todoItems;
    },
    [SET_LIST_LOADING](state, listLoading) {
      state.listLoading = listLoading;
    },
    [SET_APPEND_LOADING](state, appendLoading) {
      state.appendLoading = appendLoading;
    },
    [SET_FILTER_TYPE](state, filterType) {
      state.filterType = filterType;
    }
  },

  actions: {
    async [FETCH_USERS]({ commit }) {
      const users = await todoServiceOfStep2.fetchUsers();
      commit(
        SET_USERS,
        users.map(({ _id, name }) => ({ id: _id, name }))
      );
    },

    async [ADD_USER]({ dispatch, commit }, name) {
      const { _id } = await todoServiceOfStep2.addUser(name);
      await dispatch(FETCH_USERS);
      commit(SET_USER, _id);
    },

    async [REMOVE_USER]({ dispatch, state }) {
      if (state.selectedUserId === -1) return;
      await todoServiceOfStep2.removeUser(state.selectedUserId);
      return dispatch(FETCH_USERS);
    },

    async [FETCH_ITEMS]({ commit, state }, userId = state.selectedUserId) {
      if (userId === -1) return;
      if (userId !== state.selectedUserId) {
        commit(SET_LIST_LOADING, true);
      }
      try {
        const items = await todoServiceOfStep2.fetchItemsByUser(
          state.selectedUserId
        );
        commit(
          SET_TODO_ITEMS,
          items.map(({ _id, ...item }) => ({ id: _id, ...item }))
        );
      } catch (e) {
        commit(SET_TODO_ITEMS, []);
        console.error(e);
      } finally {
        commit(SET_USER, userId);
        commit(SET_LIST_LOADING, false);
      }
    },

    async [ADD_ITEM]({ dispatch, state, commit }, contents) {
      commit(SET_APPEND_LOADING, true);
      try {
        await todoServiceOfStep2.addItemByUser(state.selectedUserId, contents);
        await dispatch(FETCH_ITEMS);
      } catch (e) {
        console.error(e);
      } finally {
        commit(SET_APPEND_LOADING, false);
      }
    },

    async [UPDATE_ITEM]({ dispatch, state }, { itemId, contents }) {
      await todoServiceOfStep2.updateItemByUserIdAndItemId(
        state.selectedUserId,
        itemId,
        contents
      );
      return dispatch(FETCH_ITEMS);
    },

    async [REMOVE_ITEM]({ dispatch, state }, itemId) {
      await todoServiceOfStep2.removeUserItemById(state.selectedUserId, itemId);
      return dispatch(FETCH_ITEMS);
    },

    async [REMOVE_ALL_ITEM]({ dispatch, state }) {
      await todoServiceOfStep2.removeUserItems(state.selectedUserId);
      return dispatch(FETCH_ITEMS);
    },

    async [TOGGLE_ITEM]({ dispatch, state }, itemId) {
      await todoServiceOfStep2.toggleItemByUserIdAndItemId(
        state.selectedUserId,
        itemId
      );
      return dispatch(FETCH_ITEMS);
    },

    async [UPDATE_PRIORITY]({ dispatch, state }, { itemId, priority }) {
      await todoServiceOfStep2.updateItemPriorityByUserIdAndItemId(
        state.selectedUserId,
        itemId,
        priority
      );
      return dispatch(FETCH_ITEMS);
    }
  }
};

export default step2;
