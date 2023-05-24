import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/public/home/home/Home";
import Shop from "../layouts/Shop";
import Menus from "../pages/public/menus/menus/Menus";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
         
    },
    {
      path:'shop',
      element:<Shop></Shop>,
      children:[
        {
          path:'',
          element:<Menus></Menus>
        }
      ]
    }
  ])

  export default router