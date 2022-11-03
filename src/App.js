import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Root from "./page/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <ProductAll /> },
        { path: "/login", element: <Login /> },
        { path: "/product/:id", element: <ProductDetail /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
