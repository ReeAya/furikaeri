import { useState } from "react";

import classes from "../routes/NewPost.module.css";
import Modal from "../Modal";

export default function NewPost({ onCancel, onAddPost }) {
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
  }

  function submitFormHandler(e) {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
      feeling: enteredFeeling,
    };

    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitFormHandler}>
      <h3>New Entry</h3>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={authorChangeHandler} required />
      </p>
      <p>
        <label htmlFor="feeling">Feeling</label>
        <select
          onChange={feelingChangeHandler}
          defaultValue="-- Please Choose one --"
        >
          <option value="">-- Please choose a feeling --</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="hungry">Hungry</option>
          <option value="disappointed">Disappointed</option>
          <option value="good">Great</option>
          <option value="angry">Angry</option>
        </select>
      </p>

      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
    </Modal>
  );
}
