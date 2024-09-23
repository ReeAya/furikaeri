import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
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
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
          <p className={classes.feeling}>{evaluateFeeling(post.feeling)}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
 const response = await fetch("http://localhost:8080/posts/" + params.id);
 const resData = await response.json();
 console.log(resData.post);
 return resData.post
}