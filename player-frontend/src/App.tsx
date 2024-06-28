import Root from "./routes/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Error, Login } from "./pages";
import Player from "./pages/Player/Player";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/player",
          element: <Player />,
        },
      ],
    },
    {
      path: "*",
      element: <Error status="404" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
