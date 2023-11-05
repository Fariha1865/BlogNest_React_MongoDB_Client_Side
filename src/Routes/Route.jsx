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


const router = createBrowserRouter([

    
    {
        path: "/",
        element: <Root />,

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
                path: "/addBlog",
                element: <AddBlogs/>
            },
            {
                path: "/blogUpdate/:id",
                element: <PrivateRoute><EditBlogs/></PrivateRoute>
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><WishLists/></PrivateRoute>
            },
            

        ]
    },
]);


export default router;