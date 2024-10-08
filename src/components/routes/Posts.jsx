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

export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();
      return responseData.posts
}