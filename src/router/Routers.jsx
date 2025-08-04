import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/home",
    element: <h2>this is home</h2>
  },
]);

export default Routers;