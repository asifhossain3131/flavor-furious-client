import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/public/home/home/Home";
import Shop from "../layouts/Shop";
import Menus from "../pages/public/menus/menus/Menus";
import CategoryWiseMenu from "../pages/public/menus/category wise menu/CategoryWiseMenu";
import Login from "../pages/public/user/Login";
import Register from "../pages/public/user/Register";
import SingleFood from "../pages/public/menus/single food/SingleFood";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../layouts/UserDashboard";
import UserHome from "../pages/private/dashboard/user dashboard/UserHome";
import UserCart from "../pages/private/dashboard/user dashboard/UserCart";
import AllUsers from "../pages/private/dashboard/admin dashboard/AllUsers";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
        ]
         
    },
    {
      path:'/shop',
      element:<Shop></Shop>,
      children:[
        {
          path:'/shop',
          element:<Menus></Menus>,
          loader:()=>fetch('http://localhost:5000/countMenus')
        },
        {
          path:'shop/categoryFood/:name',
          element:<CategoryWiseMenu></CategoryWiseMenu>
        },
        {
          path:'singlefood/:id',
          element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    },
    {
      path:'dashboard',
      element:<UserDashboard></UserDashboard>,
      children:[
        {
          path:'/dashboard',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<UserCart></UserCart>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ])

  export default router