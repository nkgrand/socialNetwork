import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const MENU = [
  {
    title: "Profile",
    to: "profile",
  },
  {
    title: "Messages",
    to: "dialogs",
  },
  {
    title: "News",
    to: "news",
  },
  {
    title: "Music",
    to: "music",
  },
  {
    title: "Setting",
    to: "setting",
  },
];

function Navbar() {
  return (
    <nav className={style.navbar}>
      {MENU.map(({ title, to }, index) => (
        <div className={style.items} key={index}>
          <NavLink
            className={style.item}
            to={`/${to}`}
            activeClassName={style.activeLink}
          >
            {title}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
