import style from "./profileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <img
        src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg"
        alt=""
        className={style.polotno}
      />
      <div className={style.wrapper}>ava + description</div>
    </div>
  );
}

export default ProfileInfo;
