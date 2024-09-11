import "./NewPost.module.css";
import classes from "./NewPost.module.css";

export default function NewPost({
  onAuthorChange,
  onCancel,
  onFeelingChange,
  onBodyChange,
}) {
  return (
    <form className={classes.form}>
      <h3>New Entry</h3>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={onAuthorChange} required />
      </p>
      <p>
        <label htmlFor="feeling">Feeling</label>
        <select
          onChange={onFeelingChange}
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
          onChange={onBodyChange}
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
