import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Root from "./page/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  const [auth, setAuth] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {}, [auth]); //로그인 여부
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <ProductAll
              auth={auth}
              productList={productList}
              setProductList={setProductList}
            />
          ),
        },

        { path: "/login", element: <Login auth={auth} setAuth={setAuth} /> },

        {
          path: "/product/:id",
          element: <PrivateRoute auth={auth} />,
        },
      ],
    },
    /*{
      path: "/login", 
      element: <Login auth={auth} setAuth={setAuth} />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },*/
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
