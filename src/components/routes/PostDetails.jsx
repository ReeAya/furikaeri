import { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Modal from '../../components/Modal';
import classes from './PostDetails.module.css';
import supabase from '../../supabase';

function PostDetails() {
  function evaluateFeeling(feeling) {
    let data = feeling.toLowerCase();

    if (data === "happy") {
      return "😀";
    } else if (data === "sad") {
      return "😕";
    } else if (data === "hungry") {
      return "🍰";
    } else if (data === "disappointed") {
      return "😕";
    } else if (data === "good") {
      return "🙂";
    } else if (data === "angry") {
      return "😡";
    }
  }


  const navigate = useNavigate();

  async function handleDeletePost(id) {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) {
      return;
    }

    const { error } = await supabase
      .from("feelings")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    window.location.href = "/";
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
        <div className={classes.author}>{post.author} <span><IoMdClose onClick={() => handleDeletePost(post.id)} className={classes.close} color="black" /></span></div>
        <p className={classes.feeling}>{evaluateFeeling(post.feeling)}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const id = params.id;
  const { data, error } = await supabase
    .from("feelings") // 👈 Make sure this matches your table
    .select("*")
    .eq("id", id)
    .single(); // return just one row

  if (error) {
    console.error(error);
    return null; // triggers your "post not found" UI
  }

  return data;
}
