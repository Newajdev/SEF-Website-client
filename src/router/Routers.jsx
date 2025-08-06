import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import BootCamp from "../pages/bootcamp/BootCamp";
import Seminar from "../pages/seminar/Seminar";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import SuccessStory from "../pages/successstory/SuccessStory";


const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/courses',
        element: <Courses></Courses>
      },
      {
        path:'/bootcamp',
        element: <BootCamp></BootCamp>
      },
      {
        path:'/seminar',
        element: <Seminar></Seminar>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
      },
      {
        path:'/success',
        element: <SuccessStory></SuccessStory>
      },
    ]
  },
]);

export default Routers;