import chatroomRouter from "../modules/chatroom/chatroom.router";
import bookCategoryRouter from "../modules/bookCategory/bookCategory.router";
import { Router } from "express";
import userRouter from "../modules/user/user.router";
import authRouter from "../modules/auth/auth.router";
import { CartRouter } from "../modules/cart/cart.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/bookcategory",
    route: bookCategoryRouter,
  },
  {
    path: "/cart",
    route: CartRouter,
  },
  {
    path: "/chatroom",
    route: chatroomRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
