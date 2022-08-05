<template>
  <div id="show">
    :: 할일 수정 :: <br><br><br>
    <input type="text" v-model="eTodo[0].text" class="edit" v-on:keyup.enter="update">
    <div>
      <button class="done" v-on:click="update">수정</button>
      <button v-on:click="cancel">취소</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      eTodo: ''
    }
  },
  methods: {
    update(){
      for(var i=0;i<this.$store.state.todos.length;i++){
        if(this.$store.state.todos[i].id==this.id){
          this.$store.state.todos[i].text = this.eTodo[0].text;
        }
      }
      localStorage.setItem("items",JSON.stringify(this.$store.state.todos));
      alert("수정되었습니다! ");
      this.$router.push({ name: "todoList" });
    },
    cancel(){
      this.$router.push({ name: "todoList" });
    }
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
  margin-bottom: 10px;
  font-size: 24px;
}

</style>