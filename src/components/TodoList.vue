<template>
  <div id="todoapp">
    <h2>TODO List</h2>

    <div class="inputBox shadow">
      <input type="text" v-model="searchTerm" v-on:keyup.enter="searchTodoItem" placeholder="검색하세요">
      <button class="addContainer" @click="searchTodoItem">
        검색
      </button>
    </div>


    <div class="buttonBox">
      <ul class="filters">
        <li><a href="#" @click.prevent="visibility='all'"  :class="{ selected: visibility == 'all' }">All</a></li>
        <li><a href="#" @click.prevent="visibility='active'" :class="{ selected: visibility == 'active' }">todo</a></li>
        <li><a href="#" @click.prevent="visibility='completed'" :class="{ selected: visibility == 'completed' }"> done </a></li>
      </ul>
    </div>

   <div id="todo" v-for="(todo,index) in todosFiltered" :key="todo.id">
     <input type="checkbox" class="checked" v-model="todo.checked" v-on:change="save" />

     <router-link v-bind:to="'/view/' + todo.id">
       <div :class="{completed: todo.checked}" id="text">
             {{todo.text}}<span :class="{completedTxt: todo.checked}" style="display:none">(완료)</span>
       </div>
     </router-link>

     <div class="actionBtn">
       <router-link v-bind:to="'/edit/' + todo.id">
         <button class="edit">Edit</button>
       </router-link>

       <button class="remove" v-on:click="remove(index)" style="cursor:pointer;">
         Del
       </button>
     </div>

   </div>

    <div class="inputBox">
      <input type="text" v-model="newTodo" v-on:keyup.enter="add" placeholder="할일을 등록하세요"/>

      <button class="addContainer" v-on:click="add">
        등록
      </button>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      newTodo: '',
      newId: '',
      searchTerm: '', // 검색한 todo
      todolist: [], // 기존의 todolist
      searchedTodoList : [],
      visibility: 'all'
    }
  },
  created(){
    this.todolist = this.$store.getters.todosFiltered;
    this.searchedTodoList = this.todolist;
  },
  computed: {
    todosFiltered(){
      // return this.$store.getters.todosFiltered;
      if(this.visibility === 'all') {
        return this.searchedTodoList;
      }

      if ( this.visibility === 'active') {
        return this.searchedTodoList.filter(function(todoItem) {
          return !todoItem.checked;
        });
      }  else {
        //completed
        return this.searchedTodoList.filter(function(todoItem) {
          return todoItem.checked;
        })

      }

    }
  },

  methods: {
    searchTodoItem() {
      this.searchedTodoList = this.todolist;
      //
      if (this.searchTerm === '') { // 검색 값 빈 값
        return this.searchedTodoList;
      }

      if (this.searchTerm !== '') { //검색 값이 있을경우
        this.searchedTodoList = this.searchedTodoList.filter(todoItem => {
          return todoItem.text.toLocaleLowerCase().indexOf(this.searchTerm.trim().toLocaleLowerCase()) > -1 ||
                 todoItem.text.toLowerCase().indexOf(this.searchTerm.trim().toLowerCase()) > -1
        })

      }

    },
   add: function(){
     if(this.newTodo.trim().length == 0){
       // alert("");
       // return
     } else {
       this.$store.commit('add',{
         id: this.newId,
         text: this.newTodo,
       });

       //console.log(this.$store.state.todos.length);
       this.newId++;
       this.newTodo = "";
       localStorage.setItem("items",JSON.stringify(this.$store.state.todos));
     }

   },
   remove: function(index) {
     alert("삭제되었습니다");
     this.$store.state.todos.splice(index,1);
     localStorage.setItem("items", JSON.stringify(this.$store.state.todos));
   },
   save: function(){
     localStorage.setItem("items", JSON.stringify(this.$store.state.todos));
   },

   filter() {
     console.log('filter button')
   },

 }
}
</script>

<style scoped>
a {
  color: #222;
  text-decoration: none;
}
#todoapp{
 max-width: 500px;
 margin: 50px auto;
  background: #feeca3;
}
h2{
 margin-bottom: 30px;
 text-align: center;
 font-size: 35px;
 color: #fff;
  background: #1e3f68;
}
input[type="text"]{
width: 100%;
 height: 30px;
 border-radius: 3px;
}

#todo{
 height:30px;
 width: 100%;
 border-radius: 3px;
 display: flex;
 align-items: center;
 justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(175, 47, 47, 0.2);
}

#buttons {
  margin-bottom: 10px;
  text-align: center;
}
.completed{
 text-decoration: line-through;
 color: grey;
}
.completedTxt{
 display: inline-block !important;
}
.inputBox {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 50px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  background: #feeca3;
}
.inputBox input {
  font-size: 0.9rem;
}
.addContainer {
  float: right;]
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.filters {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a.selected,
.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

.actionBtn{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>