import About from "../pages/about/About";
import Home from "../pages/home/Home";

const publicRoutes = [
  {
    path: "/metals",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "*",
    element: <></>,
  },
];

export default publicRoutes;
