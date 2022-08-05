import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../components/TodoList'


Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: ㅅ,
  },
  {
    path: "/recipes/new",
    name: "NewRecipe",
    component: NewRecipe,
  },
  {
    path: "/recipes/:id",
    name: "RecipeDetails",
    component: RecipeDetails,
  },

  {
    path: '/',
    redirect: '/notes'
  },
  {
    path: '/notes',
    redirect: '/notes/all',
    component: Notes,
    children: [
      {
        path: 'all',
        name: 'NotesAll',
        meta: {
          title: '공책',
          sheetName: 'notes_sheet',
          keepAlive: 'XgNotes',
          showNavbar: true
        },
        component: NotesAll
      },
      {
        path: 'finish',
        name: 'NotesFinish',
        meta: {
          title: '공책 - Done',
          sheetName: 'notes_sheet',
          showNavbar: true
        },
        component: NotesFinish
      },
      {
        path: 'unfinish',
        name: 'NotesUnfinish',
        meta: {
          title: '공책 - todo',
          sheetName: 'notes_sheet',
          showNavbar: true
        },
        component: NotesUnfinish
      }
    ]
  },
  {
    path: '/create/note',
    name: 'CreateNote',
    meta: {
      title: '新建',
      showNavbar: true
    },
    component: CreateNote
  },
  {
    path: '/collection',
    name: 'Collection',
    meta: {
      title: '收藏',
      keepAlive: 'XgCollection',
      showNavbar: true
    },
    component: NotesCollect
  },
  {
    path: '/note/:id',
    name: 'XgNote',
    meta: {
      title: '详情',
      sheetName: 'note_sheet',
      showBack: true
    },
    component: Note
  },

  {
    path: '/note/:id/edit',
    name: 'EditeNote',
    meta: {
      title: '编辑',
      showBack: true
    },
    component: NoteEdit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// const routes = [
//   {
//     name: 'todos',
//     path: '/todos',
//     redirect: '/todos/all',
//     component: TodoList,
//     children: [
//       {
//         name: 'todos-filter',
//         path: ':id'
//       }
//     ]
//   }
// ]
