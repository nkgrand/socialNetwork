import style from "./message.module.css";

function Message({ text }) {
  return <div className={style.message}>{text}</div>;
}

export default Message;
