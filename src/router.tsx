import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Home from "./pages/home";
import CreateBlog from "./pages/crud-pages/create";
import UpdateBlog from "./pages/crud-pages/update";
import ViewBlog from "./pages/crud-pages/review";
import DeleteBlog from "./pages/crud-pages/delete";

export const router = createBrowserRouter([
    {path: "/", 
        element: <App />,
        children: [
            {index: true, element: <Login />},
            {path: "home", element: <Home />},
            {path: "register", element: <Register />},
            {path: "logout", element: <Logout />},
            {path: "create", element: <CreateBlog />},
            {path: "update", element: <UpdateBlog />},
            {path: "review", element: <ViewBlog />},
            {path: "delete", element: <DeleteBlog />},
        ]
    },
]);

export default router;