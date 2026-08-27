// src/router/router.ts (or wherever your router file is)

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Components/Pages/Home/Home";
import NotFoundPage from "../Components/Pages/NotFound/NotFoundPage";
import About from "../Components/Pages/About/About";
import Facilities from "../Components/Pages/Facilities/Facilities";
import Tournaments from "../Components/Pages/Tournaments/Tournaments";
import SportsTourism from "../Components/Pages/SportsTourism/SportsTourism";
import Partnership from "../Components/Pages/Partnership/Partnership";
import NewsAndUpdates from "../Components/Pages/NewsAndUpdates/NewsAndUpdates";
import Register from "../Components/Pages/Register/Register";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, // same as path: "/"
        element: <Home />,
      },
     
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/facilities",
        element: <Facilities/>
      },
      {
        path: "/tournaments",
        element: <Tournaments/>
      },
      {
        path: "/sports-tourism",
        element: <SportsTourism/>
      },
      {
        path: "/partnerships",
        element: <Partnership/>
      },
      {
        path: "/news",
        element: <NewsAndUpdates/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);