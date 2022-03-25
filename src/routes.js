import Home from "./views/Home.vue";
import App from "./App.vue";
import ButtonRepo from "./components/ButtonRepo.vue"
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  /*{ path: "/", component: ButtonRepo, meta: { title: "Home" } },*/
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  /*{ path: "/:path(.*)", component: NotFound },*/
];
