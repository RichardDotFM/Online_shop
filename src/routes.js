import Admin from "./pages/admin";
import Auth from "./pages/auth";
import Basket from "./pages/basket";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/shop";
import Chinchilla from "./pages/chinchilla";
import Rat from "./pages/rats";
import Rabbit from "./pages/rabbits";
import Hamster from "./pages/hamsters";
import Mouse from "./pages/mouses";
import Guinea_pig from "./pages/guineapig";
import Degu from "./pages/degus"


import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  CHINCHILLA_ROUTE,
  RATS_ROUTE,
  RABBIT_ROUTE,
  HAMSTER_ROUTE,
  MOUSE_ROUTE,
  GUINEA_PIG_ROUTE,
  DEGU_ROUTE
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },

  {
    path: BASKET_ROUTE,
    Component: <Basket />
  }
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },

  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },

  {
    path: PRODUCT_ROUTE + "/:id",
    Component: <ProductPage />
  },
  {
    path: CHINCHILLA_ROUTE,
    Component: <Chinchilla />,
  },
  {
    path: RATS_ROUTE,
    Component: <Rat />,
  },
  {
    path: RABBIT_ROUTE,
    Component: <Rabbit />,
  },
  {
    path: HAMSTER_ROUTE,
    Component: <Hamster />,
  },
  {
    path: MOUSE_ROUTE,
    Component: <Mouse />,
  },
  {
    path: DEGU_ROUTE,
    Component: <Degu />,
  },
  {
    path: GUINEA_PIG_ROUTE,
    Component: <Guinea_pig />,
  },
];
