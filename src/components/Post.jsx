import { Link } from "react-router-dom";
import classes from "./Post.module.css";

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
      <Link to={props.id}>
           <li className={classes.post}>
              <p className={classes.author}>{props.author}</p>
              <p className={classes.text}>
                 Today's feeling: {evaluateFeeling(props.feeling)}
             </p>
              <p className={classes.text}>Furikaeri: {props.body}</p>
          </li>
        </Link>

  
  );
}
