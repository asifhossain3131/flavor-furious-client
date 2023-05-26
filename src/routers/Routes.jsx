import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/public/home/home/Home";
import Shop from "../layouts/Shop";
import Menus from "../pages/public/menus/menus/Menus";
import CategoryWiseMenu from "../pages/public/menus/category wise menu/CategoryWiseMenu";

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
      path:'/shop',
      element:<Shop></Shop>,
      children:[
        {
          path:'/shop',
          element:<Menus></Menus>
        },
        {
          path:'shop/categoryFood/:name',
          element:<CategoryWiseMenu></CategoryWiseMenu>
        }
      ]
    }
  ])

  export default router