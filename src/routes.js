import Admin from "./pages/admin";
import Auth from "./pages/auth";
import Basket from "./pages/basket";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
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
  }
];
