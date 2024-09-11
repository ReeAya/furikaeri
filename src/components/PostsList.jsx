import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

export default function PostsList({ modalVisible, onStopPosting }) {
  //
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredFeeling, setEnteredFeeling] = useState("");
  //

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }
  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  function feelingChangeHandler(e) {
    setEnteredFeeling(e.target.value);
    console.log(e.target.value);
  }

  let modalContent;

  if (modalVisible) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onFeelingChange={feelingChangeHandler}
          onCancel={onStopPosting}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalVisible ? modalContent : null}

      <ul className={classes.posts}>
        <Post
          author={enteredAuthor}
          feeling={enteredFeeling}
          body={enteredBody}
        />
        <Post author="Ree" body="lalalalalala" />
      </ul>
    </>
  );
}
