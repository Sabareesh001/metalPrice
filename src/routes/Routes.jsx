import { useRoutes } from "react-router-dom"
import publicRoutes from "./publicRoutes"
import Layout from "../pages/layout/Layout";

const Routes = ()=>{
    const joinedRoutes = useRoutes(
        [
            {
                path:'/',
                element:<Layout/>,
                children:publicRoutes
            }
        ]
    )
    return joinedRoutes;
}

export default Routes;