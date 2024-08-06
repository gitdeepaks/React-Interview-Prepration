import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Context from "./context/context";
import axios from "axios";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
};

export default App;
