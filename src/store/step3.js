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
export const SET_MEMBERS = "SET_MEMBERS";
export const SET_TODO_ITEMS = "SET_TODO_ITEMS";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

export default {
  namespaced: true,

  state: {
    teams: [],
    selectedTeamId: null,
    members: [],
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

    [SET_MEMBERS](state, members) {
      state.members = members;
    },

    [SET_TODO_ITEMS](state, todoItems) {
      state.todoItems = todoItems;
    },

    [SET_FILTER_TYPE](state, filerType) {
      state.filerType = filerType;
    }
  },

  actions: {
    async [FETCH_TEAMS]({ commit }) {
      const teams = await todoServiceOfStep3.fetchTeams();
      commit(SET_TEAMS, teams.map(({ _id, name }) => ({ id: _id, name }));
    },

    async [ADD_TEAM]({ dispatch }, name) {
      await todoServiceOfStep3.addTeam(name);
      return dispatch(FETCH_TEAMS);
    },

    async [REMOVE_TEAM]({ dispatch, state: { selectedTeamId: id } }) {
      await todoServiceOfStep3.removeTeam(id);
      return dispatch(FETCH_TEAMS);
    },

    async [FETCH_TEAM]({ commit }, teamId) {
      const { members } = await todoServiceOfStep3.fetchTeam(teamId);
      commit(SET_TEAM, teamId);
      commit(SET_MEMBERS, members);
    },

    async [ADD_MEMBER]({ dispatch }, { teamId, name }) {
      await todoServiceOfStep3.addMember(teamId, name);
      return dispatch(FETCH_TEAM, teamId);
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
