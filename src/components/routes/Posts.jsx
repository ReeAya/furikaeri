import { Outlet } from "react-router-dom";
import "../../App.css";
import PostsList from "../PostsList";

function Posts() {
  return (
    <>
    <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
