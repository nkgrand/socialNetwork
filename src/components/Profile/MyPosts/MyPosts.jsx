import Post from "./Post/Post";
import style from "./myPostst.module.css";

function MyPosts({ posts }) {
  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea> <br />
        <button>Add post</button>
      </div>
      {posts.map(({ id, message, likeCounts }) => (
        <Post
          key={Math.random() * 100}
          id={id}
          message={message}
          likecount={likeCounts}
        />
      ))}
    </div>
  );
}

export default MyPosts;
