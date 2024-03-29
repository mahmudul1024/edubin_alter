import { createBrowserRouter } from "react-router-dom";
import Category from "../Category/Category";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/category/:id", element: <Category></Category> },
      { path: "/news/:id", element: <News /> },
    ],
  },
]);
