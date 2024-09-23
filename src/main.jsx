import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/routes/Posts.jsx";
import "./index.css";
import NewPost from "./components/routes/NewPost.jsx";
import RouteLayout from "./components/routes/RouteLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/", element: <App />, children:[
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
