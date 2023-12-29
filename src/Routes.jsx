import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home, { productsLoader } from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product, { productLoader } from "./pages/Product";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:productsLoader
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/burger/:id",
                element:<Product/>,
                loader:productLoader
            }
        ]
    },
])

const Routes = ()=>{
    return <RouterProvider router={router}/>
}

export default Routes;