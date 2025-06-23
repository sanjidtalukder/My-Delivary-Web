import {
  createBrowserRouter,
} from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import UserFeedback from "../pages/Home/UserFeedback";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/authantication/Login";
import Register from "../pages/authantication/Register";
import Coverage from "../pages/coverage/Coverage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path: "/feedback",
          element: <UserFeedback />
        },{
          path:"/coverage",
          Component: Coverage
        }
    
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login,

      },
      {
        path:'register',
        Component:Register,
      }
    ]
  }
]);