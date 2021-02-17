import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/my",
    name: "My",
    component: () => import(/* webpackChunkName: "about" */ "../pages/My.vue")
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Category.vue")
  },
  {
    path: "/chinese",
    name: "Chinese",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Chinese.vue")
  },
  {
    path: "/Hd",
    name: "Hd",
    component: () => import(/* webpackChunkName: "about" */ "../pages/Hd.vue")
  },
  {
    path: "/",
    name: "Demo",
    component: () => import(/* webpackChunkName: "about" */ "../pages/Demo.vue")
  },
  {
    path: "/rank",
    name: "Rank",
    component: () => import(/* webpackChunkName: "about" */ "../pages/Rank.vue")
  },
  {
    path: "/uncensored",
    name: "Unsencored",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Uncensored.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
