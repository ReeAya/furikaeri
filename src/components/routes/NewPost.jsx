import { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";
import classes from "../routes/NewPost.module.css";
import Modal from "../Modal";

export default function NewPost({  }) {
  //
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");
  // const [enteredFeeling, setEnteredFeeling] = useState("");
  // //

  // function bodyChangeHandler(e) {
  //   setEnteredBody(e.target.value);
  // }
  // function authorChangeHandler(e) {
  //   setEnteredAuthor(e.target.value);
  // }
  // function feelingChangeHandler(e) {
  //   setEnteredFeeling(e.target.value);
  // }

  // function submitFormHandler(e) {
  //   e.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //     feeling: enteredFeeling,
  //   };

    
  // }
  return (
    <Modal>
    <Form className={classes.form} method="post" >
      <h3>New Entry</h3>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="author"  required />
      </p>
      <p>
        <label htmlFor="feeling">Feeling</label>
        <select
          
          defaultValue="-- Please Choose one --" name="feeling"
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
          name="body"
        ></textarea>
      </p>
      <p className={classes.actions}>
        <Link to="/" type="button" className={classes.button} >
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const postsData = Object.fromEntries(formData)
 await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postsData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return redirect('/')
}