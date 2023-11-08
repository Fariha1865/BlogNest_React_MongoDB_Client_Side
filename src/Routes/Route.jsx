import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import PrivateRoute from "./PrivateRoute";
import EditBlogs from "../Pages/EditBlog/EditBlog";
import WishLists from "../Pages/Wishlist/WishLists";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Featured from "../Pages/Featured/Featured";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Register from "../Register/Register";
import PrivateRouteDetailsPage from "./PrivateRouteDetailsPage";
import PrivateAddBlog from "./PrivateAddBlog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([

    
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addBlog",
                element: <PrivateAddBlog><AddBlogs/></PrivateAddBlog>
            },
            {
                path: "/blogUpdate/:id",
                element:<PrivateRoute><EditBlogs/></PrivateRoute>
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><WishLists/></PrivateRoute>
            },
            {
                path: "/allBlogs",
                element: <AllBlogs/>
            },
            {
                path: "/featured",
                element: <Featured/>
            },
            {
                path: "/blogDetails/:id",
                element: <PrivateRouteDetailsPage><BlogDetails/></PrivateRouteDetailsPage>
            },
            

        ]
    },
]);


export default router;