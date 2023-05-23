import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../pages/public/home/banner/Banner";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>
            }
        ]
         
    }
  ])

  export default router