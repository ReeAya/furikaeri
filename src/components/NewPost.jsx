import "./NewPost.module.css";
import classes from "./NewPost.module.css";

export default function NewPost() {
  return (
    <form className={classes.form}>
      <h3>New Entry</h3>
      <p>
        <label htmlFor="name">Name</label>{" "}
        <input type="text" id="name" required />
      </p>
      <p>
        <label htmlFor="feeling">Feeling</label>
        <select>
          <option value="" disabled selected>
            --Please choose one--
          </option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="hungry">Hungry</option>
          <option value="disappointed">Disappointed</option>
          <option value="great">Great</option>
        </select>
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3}></textarea>
      </p>
    </form>
  );
}
