import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";


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
        element: <h3>This Is Course Page</h3>
      },
      {
        path:'/bootcamp',
        element: <h3>This Is bootcamp Page</h3>
      },
      {
        path:'/seminar',
        element: <h3>This Is seminar Page</h3>
      },
      {
        path:'/about',
        element: <h3>This Is About Us Page</h3>
      },
      {
        path:'/Contact',
        element: <h3>This Is contact Page</h3>
      },
      {
        path:'/gallary',
        element: <h3>This Is Gallary Page</h3>
      },
    ]
  },
]);

export default Routers;