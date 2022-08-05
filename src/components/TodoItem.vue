<template>
  <li>
    <span :class="{ pointer:true, 'todo-done':todoitem.done }">
      {{todoitem.todo}}
      {{todoitem.done ? " (완료)" : ""}}
    </span>
  </li>
</template>

<script>
export default {
  name: 'todoItem',
  props: ['todoitem'],
  methods: {


    //수정 화면
    editTodo(id) {
      // this.$store.dispatch(Constant.INITIALIZE_TODOITEM, { todoitem: { ...this.todoitem } });
      this.$router.push({ name: 'updateTodo', params: { id } })
    },
  }
}
</script>

<style scoped>

</style>