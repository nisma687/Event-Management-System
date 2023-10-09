import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/logIn',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Registration/>
        }
      ]
    },
  ]);

export default router;