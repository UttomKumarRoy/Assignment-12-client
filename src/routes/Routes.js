import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Main/Blog";
import Error from "../Components/Main/Error";
import Home from "../Components/Main/Home";
import Login from "../Components/Main/Login";
import SignUp from "../Components/Main/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
//import Home from "../../Pages/Home/Home/Home";
//import Login from "../../Pages/Login/Login";
//import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
//import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element:<Blog></Blog>
            },
        ]
    }
    
])

export default router;