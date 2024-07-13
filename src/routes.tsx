import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Series from "./pages/series/series";
import Movie from "./pages/movie/movie";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/series",
      element: <Series />,
    },
    {
      path: "/movies",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Movie />,
    },
  ]);