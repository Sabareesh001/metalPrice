import Home from "../pages/home/Home";

 const  publicRoutes = [
    {
        path:'/metals',
        element:<Home/>
    },
    {
        path:'*',
        element:<></>
    }
]

export default publicRoutes;