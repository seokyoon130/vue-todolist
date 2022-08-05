<template>
  <div id="show">
    :: 할일 상세 :: <br><br><br>

    <input type="text" v-model="eTodo[0].text" readonly />

    <div>
      <button class="done" v-on:click="goEdit">할일 수정</button>
      <button class="done" v-on:click="cancel">취소</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      //show: true,
      id: this.$route.params.id,
      eTodo: ''
    }
  },
  methods: {
    goEdit(){
      this.$router.push({ name: "editTodo" });
    },
    cancel: function() {
      this.$router.push({ name: "todoList" });
    },

  },
  created(){
    this.eTodo = this.$store.state.todos.filter(todo=>{
      return todo.id == this.id;
    });

    console.log("this.eTodo[0]===",this.eTodo[0]);
  },

}
</script>

<style scoped>
#show{
  max-width: 500px;
  margin: 50px auto;
}
input {
  border: none;
  font-size: 24px;
  margin-bottom: 10px;
}
</style>