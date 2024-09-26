import About from "../pages/about/About";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/Home";

const publicRoutes = [
  {
    path: "/metals",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/contact",
    element: < Contact/>,
  },
];

export default publicRoutes;
