import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import PostList, { postLoader } from "./pages/PostList";
import PostComments from "./pages/PostComments";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/posts",
          element: <PostList />,
          loader: postLoader,
        },
        {
          path: "/posts/:postId",
          element: <PostComments />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
