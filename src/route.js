import TodoList from '@/components/TodoList.vue'
import ViewTodo from '@/components/ViewTodo.vue'
import EditTodo from '@/components/EditTodo.vue'

export default[
  {
    path:'/' ,
    name: 'todoList',
    component: TodoList
  },
  {
    path:'/view/:id',
    name: 'viewTodo',
    component: ViewTodo
  },
  {
    path:'/edit/:id',
    name: 'editTodo',
    component: EditTodo
  },
]

// Vue.use(VueRouter)
//
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'todoList',
//       component: TodoList
//     },
//     {
//       path: '/add',
//       name: 'add',
//       component: AddTodo
//     },
//     {
//       path: '/view/:id',
//       name: 'view',
//       component: ViewTodo
//     }
//   ]
// })