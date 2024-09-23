import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost from "./components/routes/NewPost.jsx";
import RouteLayout from "./components/routes/RouteLayout.jsx";
import Posts , { loader as postsLoader} from "./components/routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/", element: <Posts />,
        loader: postsLoader, children:[
         { path: "/create-post", element: <NewPost /> }
      ] },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
