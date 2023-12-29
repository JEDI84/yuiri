
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Welcome from "../pages/Welcome/Welcome";
import Main from "../pages/Main/Main";
import About from "../pages/About/About"
import Calendar from "../pages/Calendar/Calendar"
import Contact from "../pages/Contact/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/Main",
        element: <Main />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Calendar",
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
