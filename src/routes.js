import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
export default [

  {
    name: "首页",
    path: "/home",
    component: lazy(() => import("./pages/home")),
  },
  {
    name: "设计器",
    path: "/design",
    component: lazy(() => import("./pages/designer")),
  },
  {
    name: "渲染器",
    path: "/former",
    component: lazy(() => import("./pages/former")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/error/404")),
  },
];
