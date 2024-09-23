import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        Furikaeri <MdEditNote />
      </h1>{" "}
      <p>
        <Link to="/create-post" className={classes.button} >
          <IoMdAdd size={18} />
          New Post{" "}
        </Link>{" "}
      </p>{" "}
    </header>
  );
}

export default MainHeader;
