import React from 'react'

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const ROUTES = [
  {
    path: "/login",
    key: "login",
    component: Login,
    exact: true,
    isProtected : false 
  },
  {
    path: "/",
    key: "dashboard",
    component: Dashboard,
    exact: true,
    isProtected : true 
  },
  {
    key: "notFound",
    component: () => <h1>404 Not Found!!</h1>,
    exact: true,
    isProtected : false
  },
];

export default ROUTES;