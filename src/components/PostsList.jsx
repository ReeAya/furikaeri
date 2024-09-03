import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Ree" body="React is fun" />
        <Post author="Shae" body="Let's go" />
      </ul>
    </>
  );
}
