import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from "./dialogs.module.css";

function Dialogs({ dialogs, messages }) {
  return (
    <div className={style.wrapper}>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          {dialogs.map(({ id, name }, key) => (
            <DialogItem key={Math.random()} name={name} id={id} />
          ))}
        </div>

        <div className={style.messages}>
          {messages.map(({ id, text }, key) => (
            <Message key={Math.random()} id={id} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
