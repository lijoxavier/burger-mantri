import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    },
])

const Routes = ()=>{
    return <RouterProvider router={router}/>
}

export default Routes;