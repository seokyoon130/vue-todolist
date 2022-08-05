import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    todos: JSON.parse(localStorage.getItem("items")) || [],
    filter: 'all',
  },
  getters:{
    todosFiltered(state) {
      if (state.filter == 'all') {
        // console.log("hi");
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.checked)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.checked)
      }
      return state.todos;
    },
    id: function(state){
      console.log("hi")
      return state.todos[state.todos.length-1].id;
    }
  },
  mutations: {
    add(state, todo){
      state.todos.push({
        id: todo.id,
        text: todo.text,
        checked: false,
        // editing: false
      });
    }
  }
});
