import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import PostList, { postLoader } from "./pages/PostList";
import PostComments from "./pages/PostComments";
import Error from "./components/Error";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/auth",
          element: <HomePage />,
          children: [
            { path: "/login", element: <LogIn /> },
            { path: "/signup", element: <SignUp /> },
          ],
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
