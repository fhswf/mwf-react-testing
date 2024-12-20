import { RouteObject } from "react-router-dom";
import { Register } from "../pages/register/Register";
import { Login } from "../pages/login/Login";
import { App } from "../App";
import { Products } from "../pages/products/Products";
import { ProductDetails } from "../pages/productdetails/ProductDetails";
import { Playground } from "../pages/playground/Playground";
import { ProtectedRoute } from "../components/protectedroute/ProtectedRoute";
import { Admin } from "../pages/admin//Admin";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/products",
                element: <Products />,
                children: [
                    {
                        path: ":id",
                        element: <ProductDetails />,
                    }
                ]
            },
            {
                path: "/playground",
                element: <Playground />,
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                ),
            },
            {
                path: "*",
                element: <div>404 Not Found</div>
            }
        ]
    },
];

export { routes };