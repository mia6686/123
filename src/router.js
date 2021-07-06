import Vue from "vue";
import Router from "vue-router";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFound from "./views/404.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/user",
      component: () => import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () => import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () => import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    },
    {
      path: "/",
      component: () => import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        //dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "Analysis",
              component: () => import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis"),
            }
          ]
        },
        //form
        {
          path: "/form",
          name: "form",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              component: () => import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm"),
            },
            {
              path: "/form/step-form",
              name: "stepform",
              component: () => import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () => import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1"),
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () => import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2"),
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () => import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3"),
                },
              ]
            },
          ]
        }
      ]
    }
  ]
});


router.beforeEach((to, form, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
