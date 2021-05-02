import { lazy } from "solid-js";
import { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/text-length-counter",
    component: lazy(() => import("./pages/text-length-counter")),
  },
  {
    path: "/repeat-it-n-times",
    component: lazy(() => import("./pages/repeat-it-n-times")),
  },
  {
    path: "/iuliia",
    component: lazy(() => import("./pages/iuliia")),
  },
  {
    path: "/iuliia/:id",
    component: lazy(() => import("./pages/iuliia/[id]")),
  },
  {
    path: "/cheap-sluts",
    component: lazy(() => import("./pages/cheap-sluts")),
  },
  //todo figure out how to use children
  // {
  //   path: "/cheap-sluts/create",
  //   component: lazy(() => import("./pages/cheap-sluts/create")),
  // },
  {
    path: "/cheap-sluts/create-vk",
    component: lazy(() => import("./pages/cheap-sluts/create-vk")),
  },
  // {
  //   path: "/cheap-sluts/delete",
  //   component: lazy(() => import("./pages/cheap-sluts/delete")),
  // },
  //todo end
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
