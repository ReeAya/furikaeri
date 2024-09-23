import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post";
import NewPost from "./routes/NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

export default function PostsList({ modalVisible, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const [isfetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");

      const responseData = await response.json();
      if (!response.ok) {
        return <p>Error!</p>;
      }
      setPosts(responseData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  let modalContent;

  function addPostsHandler(postsData) {
    {
      fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postsData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPosts((existingPosts) => [postsData, ...existingPosts]);
    }
  }
  if (modalVisible) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
      </Modal>
    );
  }
  return (
    <>
      {modalVisible ? modalContent : null}

      {!isfetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              feeling={post.feeling}
              body={post.body}
              key={uuidv4()}
            />
          ))}
        </ul>
      )}
      {!isfetching && posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There are no posts!</h2>
          <p>Add some posts!</p>
        </div>
      )}
      {isfetching && (
        <div style={{ textAlign: "center", color: "#444" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
