//Layouts

import Backend from "../layouts/Backend";

//Paginas Administrador
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    layout: Backend,
    component: Home,
    exact: true,
  },
  {
    path: "/",
    layout: Backend,
    component: Home,
    exact: true,
  },
];

export default routes;
