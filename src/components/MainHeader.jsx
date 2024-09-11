import { MdPostAdd, MdEditNote } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import classes from "./MainHeader.module.css";

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdEditNote />
        Furikaeri
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <IoMdAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
