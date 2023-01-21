import About from "components/about";
import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Chatrooms from "components/chatrooms";
import Comments from "components/comments";
import Dashboard from "components/dashboard";
import LandingPage from "components/landingpage";
import Layout from "components/layout/Layout";
import MainLayout from "components/layout/MainLayout";
import Profile from "components/profile";
import Friends from "components/profile/Friends";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const LANDINGPAGE = "/landingpage";
export const ABOUT = "/about";
export const IMPRESSUM = "/impressum";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const CHATROOMS = "/protected/chatrooms";
export const USERS = "/protected/users";

export const FRIENDS = "/protected/friends/:id";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter ([

    {path: ROOT, element: <MainLayout/>, children: [
        {path: LANDINGPAGE, element: <LandingPage/>},
        {path: ABOUT, element: <About/>},
        {path: IMPRESSUM, element: <IMPRESSUM/>},
        {path: LOGIN, element: <Login/>},
        {path: REGISTER, element: <Register/>},
    ]},
    {
        path: PROTECTED, 
        element: <Layout/>, 
        children:[
            {
                path: DASHBOARD, 
                element: <Dashboard/>
            },
            {
                path: CHATROOMS, 
                element: <Chatrooms/>
            },
            {
                path: FRIENDS,
                element: <Friends/>
            },
            {
                path: PROFILE,
                element: <Profile/>
            },{
                path: COMMENTS,
                element: <Comments/>
            }
        ]
    },
]);