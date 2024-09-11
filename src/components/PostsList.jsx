import { useState } from "react";
import { v4 as uuid } from "uuid";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

export default function PostsList({ modalVisible, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  let modalContent;

  function addPostsHandler(postsData) {
    setPosts((existingPosts) => [postsData, ...existingPosts]);
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

      {posts.length > 0 && (
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
      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There are no posts!</h2>
          <p>Let's add some posts!</p>
        </div>
      )}
    </>
  );
}
