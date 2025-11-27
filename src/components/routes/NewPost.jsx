// src/components/NewPost.jsx
import { Link, Form, redirect } from "react-router-dom";
import classes from "../routes/NewPost.module.css";
import Modal from "../Modal";
import supabase from "../../supabase.jsx";

export default function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <h3>New Entry</h3>

        <p>
          <label htmlFor="author">Name</label>
          <input type="text" id="author" name="author" required />
        </p>

        <p>
          <label htmlFor="feeling">Feeling</label>
          <select defaultValue="" name="feeling" required>
            <option value="">-- Please choose a feeling --</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="hungry">Hungry</option>
            <option value="disappointed">Disappointed</option>
            <option value="good">Good</option>
            <option value="angry">Angry</option>
          </select>
        </p>

        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}></textarea>
        </p>

        <p className={classes.actions}>
          <Link to="/" type="button" className={classes.button}>
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  console.log("Sending to Supabase:", postData);

  const { data, error } = await supabase
    .from("feelings")  // your table
    .insert([postData])
    .select();          // returns the inserted row

  if (error) {
    console.error("Supabase insert error:", error);
    alert("Failed to save post: " + error.message);
    return null;
  }

  console.log("Inserted post:", data);

  return redirect("/"); // back to home
}
