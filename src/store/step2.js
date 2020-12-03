import { FilterTypes } from "@/constants";
import todoServiceOfStep2 from "@/services/todoServiceOfStep2";

export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const SET_TODO_ITEMS = "SET_TODO_ITEMS";
export const SET_LIST_LOADING = "SET_LIST_LOADING";
export const SET_APPEND_LOADING = "SET_APPEND_LOADING";
export const SET_FILTER_TYPES = "SET_FILTER_TYPES";

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
    selectedUserId: -1,
    todoItems: [],
    listLoading: false,
    appendLoading: false,
    filterType: FilterTypes.ALL
  },

  getters: {
    selectedUser: ({ users, selectedUserId }) =>
      users.find(({ _id }) => _id === selectedUserId)
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
    [SET_FILTER_TYPES](state, filterType) {
      state.filterType = filterType;
    }
  },

  actions: {
    async [FETCH_USERS]({ commit }) {
      const users = await todoServiceOfStep2.fetchUsers();
      commit(SET_USERS, users);
    },
    [ADD_USER]({  }, payload) {

    },
    [REMOVE_USER]({  }, payload) {

    },
    [FETCH_ITEMS]({  }, payload) {

    },
    [ADD_ITEM]({  }, payload) {

    },
    [UPDATE_ITEM]({  }, payload) {

    },
    [REMOVE_ITEM]({  }, payload) {

    },
    [REMOVE_ALL_ITEM]({  }, payload) {

    },
    [TOGGLE_ITEM]({  }, payload) {

    },
    [UPDATE_PRIORITY]({  }, payload) {

    },
  }
};

export default step2;
