import React, { lazy } from "react";

export default [
  {
    name: "首页",
    path: "/home",
    component: lazy(() => import("./pages/home")),
  },
  {
    name: "工作台",
    path: "/ds",
    routes: [
      {
        name: "首页1",
        path: "/home",
        component: lazy(() => import("./pages/home")),
      },
    ],
  },
  {
    path: "*",
    component: lazy(() => import("./pages/error/404")),
  },
];
