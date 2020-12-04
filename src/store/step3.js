import todoServiceOfStep3 from "@/services/todoServiceOfStep3";

export const FETCH_TEAMS = "FETCH_TEAMS";
export const FETCH_TEAM = "FETCH_TEAM";
export const ADD_TEAM = "ADD_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const ADD_MEMBER = "ADD_MEMBER";
export const FETCH_ITEMS = "FETCH_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const UPDATE_PRIORITY = "UPDATE_PRIORITY";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL_ITEM = "REMOVE_ALL_ITEM";

export const SET_TEAMS = "SET_TEAMS";
export const SET_TEAM = "SET_TEAM";
export const SET_TODO_ITEMS = "SET_TODO_ITEMS";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

export default {
  namespaced: true,

  state: {
    teams: [],
    selectedTeamId: null,
    todoItems: [],
    filerType: null
  },

  getters: {},

  mutations: {
    [SET_TEAMS](state, teams) {
      state.teams = teams;
    },

    [SET_TEAM](state, selectedTeamId) {
      state.selectedTeamId = selectedTeamId;
    },

    [SET_TODO_ITEMS](state, todoItems) {
      state.todoItems = todoItems;
    },

    [SET_FILTER_TYPE](state, filerType) {
      state.filerType = filerType;
    }
  },

  actions: {
    async [FETCH_TEAMS]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.fetchTeams();
    },
    async [FETCH_TEAM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.fetchTeam();
    },
    async [ADD_TEAM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.addTeam();
    },
    async [REMOVE_TEAM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.removeTeam();
    },
    async [ADD_MEMBER]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.addMember();
    },
    async [FETCH_ITEMS]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.fetchItems();
    },
    async [ADD_ITEM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.addItem();
    },
    async [UPDATE_ITEM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.updateItem();
    },
    async [TOGGLE_ITEM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.toggleItem();
    },
    async [UPDATE_PRIORITY]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.updatePriority();
    },
    async [REMOVE_ITEM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.removeItem();
    },
    async [REMOVE_ALL_ITEM]({ commit, dispatch, state }, {}) {
      await todoServiceOfStep3.removeAllItem();
    }
  }
};
