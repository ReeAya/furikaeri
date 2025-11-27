import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import { IoMdClose } from "react-icons/io";

export default function Post(props) {
  function evaluateFeeling(feeling) {
    if (feeling === "happy") {
      return "😀";
    } else if (feeling === "sad") {
      return "😕";
    } else if (feeling === "hungry") {
      return "🍰";
    } else if (feeling === "disappointed") {
      return "😕";
    } else if (feeling === "good") {
      return "🙂";
    } else if (feeling === "angry") {
      return "😡";
    }
  }
  return (
    <Link to={`./${props.id}`} relative="path">
      <li className={classes.post}>
        <div className={classes.author}>{props.author}</div>
        <p className={classes.text}>
          Today's feeling: {evaluateFeeling(props.feeling)}
        </p>
        <p className={classes.text}>Furikaeri: {props.body}</p>
      </li>
    </Link>


  );
}