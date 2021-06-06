import style from "./post.module.css";

function Post({ message, likecount }) {
  return (
    <div className={style.postWrapper}>
      <div className={style.item}>
        <img
          src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          alt=""
          className={style.ava}
        />
        <p>{message}</p>
      </div>
      <span>like: {likecount}</span>
    </div>
  );
}

export default Post;
