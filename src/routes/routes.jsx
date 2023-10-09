import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Service from "../Pages/Service/Service";
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:"/",
            element:<Home/>,
            loader:()=>fetch('/data.json')
            
        },
        {
            path:'/logIn',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Registration/>
        },
        {
          path:'/services/:id',
          element:<Service/>,
          loader:()=>fetch('/data.json')
        },
      
      ]

    },
    {
        path:"*",
        element:<Errorpage/>
    }
  ]);

export default router;