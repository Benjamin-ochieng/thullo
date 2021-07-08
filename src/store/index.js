import { createStore } from 'vuex';

import defaultBoard from '../defaultBoard';
import { saveStatePlugin } from '../utils';

// const board = JSON.parse(localStorage.getItem('board')) || defaultBoard;

export default createStore({
  plugins: [saveStatePlugin],
  modules: {},
  state: {
    board: defaultBoard,
  },
  mutations: {
    ADD_TASK(state, { tasks, newTask }) {
      tasks.push(newTask);
    },
    SET_TASK(state, { task, target, value }) {
      // eslint-disable-next-line no-param-reassign
      task[target] = value;
    },
    MOVE_TASK(state, { fromTasks, sourceTaskIndex, toTasks, targetTaskIndex }) {
      const taskToMove = fromTasks.splice(sourceTaskIndex, 1)[0];
      toTasks.splice(targetTaskIndex, 0, taskToMove);
    },
    ADD_LIST(state, payload) {
      const { lists } = state.board;
      lists.push(payload);
    },
    MOVE_LIST(state, { sourceListIndex, targetListIndex }) {
      const { lists } = state.board;
      const columnToMove = lists.splice(sourceListIndex, 1)[0];
      lists.splice(targetListIndex, 0, columnToMove);
    },
  },
  actions: {
    createTask({ commit }, payload) {
      commit('ADD_TASK', payload);
    },
    updateTask({ commit }, payload) {
      commit('SET_TASK', payload);
    },
    moveTask({ commit }, payload) {
      commit('MOVE_TASK', payload);
    },
    createList({ commit }, payload) {
      commit('ADD_LIST', payload);
    },
    moveList({ commit }, payload) {
      commit('MOVE_LIST', payload);
    },
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    getTask: (state) => (targetId) => {
      const { lists } = state.board;
      return lists
        .map(({ tasks }) => tasks)
        .flatMap((task) => task)
        .find(({ id }) => id === targetId);
    },
  },
});
