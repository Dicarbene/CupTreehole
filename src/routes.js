import Home from "./views/Home.vue";
import App from "./App.vue";
import ButtonRepo from "./components/ButtonRepo.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import testView from "./components/testView.vue";
import Board from './views/Board.vue';


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/testview",
    component: testView,
    meta: { title: "testView" },
  },
  {
    path: "/board",
    component: Board,
    meta: { title: "Post Board" },
  },
  { path: "/:path(.*)", component: NotFound },
];
