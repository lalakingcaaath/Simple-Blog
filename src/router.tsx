import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";

export const router = createBrowserRouter([
    {path: "/home", element: <App />},
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/logout", element: <Logout />},
]);

export default router;