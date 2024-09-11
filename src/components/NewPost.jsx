import "./NewPost.module.css";
import classes from "./NewPost.module.css";

export default function NewPost(props) {
  return (
    <form className={classes.form}>
      <h3>New Entry</h3>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={props.onAuthorChange} required />
      </p>
      <p>
        <label htmlFor="feeling">Feeling</label>
        <select
          onChange={props.onFeelingChange}
          defaultValue="-- Please Choose one --"
        >
          <option value="">-- Please Choose one --</option>
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
          onChange={props.onBodyChange}
        ></textarea>
      </p>
    </form>
  );
}
