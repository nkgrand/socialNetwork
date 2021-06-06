import { NavLink } from "react-router-dom";
import style from "./dialogItem.module.css";

function DialogItem({ name, id }) {
  let path = `/dialogs/${id}`;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
