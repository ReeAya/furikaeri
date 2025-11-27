import { Outlet } from "react-router-dom";
import "../../App.css";
import PostsList from "../PostsList";
import supabase from "../../supabase";
import { useEffect, useState } from "react";
import { use } from "react";


// Posts Component
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
export async function loader({ params }) {
  const id = params.id; // Get the post ID from the route parameters
  const { data, error } = await supabase
    .from("feelings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Response("Failed to load posts", { status: 500 });
  }

  return data; // This will be available in your PostsList via useLoaderData()
}

async function handleDeletePost(id) {
  const { error } = await supabase
    .from("feelings")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  window.location.href = "/";
}
