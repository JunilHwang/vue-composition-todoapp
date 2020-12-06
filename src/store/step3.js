import todoServiceOfStep3 from "@/services/todoServiceOfStep3";
import { FilterTypes } from "@/constants";

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
    team: null,
    members: [],
    todoItems: {},
    filterType: {}
  },

  getters: {
    teamId: ({ team: { id } }) => id,
    filteredTodoItems: ({ members, todoItems, filterType }) =>
      members.reduce((obj, { id }) => {
        const type = filterType[id];
        obj[id] = todoItems[id].filter(
          ({ isCompleted }) =>
            (type === FilterTypes.COMPLETED && isCompleted) ||
            (type === FilterTypes.ACTIVE && !isCompleted) ||
            type === FilterTypes.ALL
        );
        return obj;
      }, {})
  },

  mutations: {
    [SET_TEAMS](state, teams) {
      state.teams = teams;
    },

    [SET_TEAM](state, team) {
      state.team = team;
    },

    [SET_MEMBERS](state, members) {
      state.members = members;
    },

    [SET_TODO_ITEMS](state, todoItems) {
      state.todoItems = todoItems;
    },

    [SET_FILTER_TYPE](state, filterType) {
      state.filterType = filterType;
    }
  },

  actions: {
    async [FETCH_TEAMS]({ commit }) {
      const teams = await todoServiceOfStep3.fetchTeams();
      commit(
        SET_TEAMS,
        teams
          .map(({ _id, name }) => ({ id: _id, name }))
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    },

    async [ADD_TEAM]({ dispatch }, name) {
      await todoServiceOfStep3.addTeam(name);
      return dispatch(FETCH_TEAMS);
    },

    async [REMOVE_TEAM]({ dispatch, getters: { teamId } }) {
      await todoServiceOfStep3.removeTeam(teamId);
      return dispatch(FETCH_TEAMS);
    },

    async [FETCH_TEAM]({ commit }, teamId) {
      const { members, _id: id, name } = await todoServiceOfStep3.fetchTeam(
        teamId
      );
      const todoItems = await Promise.all(
        members.map(({ _id }) => todoServiceOfStep3.fetchItems(teamId, _id))
      );
      commit(
        SET_TODO_ITEMS,
        members.reduce((obj, member, key) => {
          obj[member._id] = (
            todoItems[key].todoList || []
          ).map(({ _id, ...item }) => ({ ...item, id: _id }));
          return obj;
        }, {})
      );
      commit(
        SET_FILTER_TYPE,
        members.reduce((obj, member) => {
          obj[member._id] = FilterTypes.ALL;
          return obj;
        }, {})
      );
      commit(SET_TEAM, { id, name });
      commit(
        SET_MEMBERS,
        members.map(({ _id, name }) => ({ id: _id, name }))
      );
    },

    async [ADD_MEMBER]({ dispatch, getters: { teamId } }, name) {
      await todoServiceOfStep3.addMember(teamId, name);
      return dispatch(FETCH_TEAM, teamId);
    },

    async [FETCH_ITEMS](
      {
        commit,
        state: {
          todoItems,
          filterType,
          team: { id: teamId }
        }
      },
      memberId
    ) {
      const { todoList = [] } = await todoServiceOfStep3.fetchItems(
        teamId,
        memberId
      );
      commit(SET_FILTER_TYPE, {
        ...filterType,
        [memberId]: FilterTypes.ALL
      });
      commit(SET_TODO_ITEMS, {
        ...todoItems,
        [memberId]: todoList.map(({ _id, ...item }) => ({
          ...item,
          id: _id
        }))
      });
    },

    async [ADD_ITEM](
      { dispatch, getters: { teamId } },
      { memberId, contents }
    ) {
      await todoServiceOfStep3.addItem(teamId, memberId, contents);
      return dispatch(FETCH_ITEMS, memberId);
    },

    async [UPDATE_ITEM](
      { dispatch, getters: { teamId } },
      { memberId, itemId, contents }
    ) {
      await todoServiceOfStep3.updateItem(teamId, memberId, itemId, contents);
      return dispatch(FETCH_ITEMS, memberId);
    },

    async [TOGGLE_ITEM](
      { dispatch, getters: { teamId } },
      { memberId, itemId }
    ) {
      await todoServiceOfStep3.toggleItem(teamId, memberId, itemId);
      return dispatch(FETCH_ITEMS, memberId);
    },

    async [UPDATE_PRIORITY](
      { dispatch, getters: { teamId } },
      { memberId, itemId, priority }
    ) {
      await todoServiceOfStep3.updatePriority(
        teamId,
        memberId,
        itemId,
        priority
      );
      return dispatch(FETCH_ITEMS, memberId);
    },

    async [REMOVE_ITEM](
      { dispatch, getters: { teamId } },
      { memberId, itemId }
    ) {
      await todoServiceOfStep3.removeItem(teamId, memberId, itemId);
      return dispatch(FETCH_ITEMS, memberId);
    },

    async [REMOVE_ALL_ITEM]({ dispatch, getters: { teamId } }, { memberId }) {
      await todoServiceOfStep3.removeAllItem(teamId, memberId);
      return dispatch(FETCH_ITEMS, memberId);
    }
  }
};
