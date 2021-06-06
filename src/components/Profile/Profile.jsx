import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ posts }) {
  return (
    <>
      <ProfileInfo />

      <MyPosts posts={posts} />
    </>
  );
}

export default Profile;
