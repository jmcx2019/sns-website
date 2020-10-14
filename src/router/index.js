import Vue from "vue";
import Router from "vue-router";

const _import = file => () => import("@/components/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "SNS",
    component: _import("main/index")
  }
];

const router = new Router({
  mode: "history",
  routes: routes
});

export default router;
