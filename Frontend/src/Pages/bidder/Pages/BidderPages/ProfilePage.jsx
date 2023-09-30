import { useDispatch } from "react-redux";
import { bidderLogout } from "../../Slices/bidderSlice";
function ProfilePage() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Profile</h1>
      <button
        onClick={() => {
          dispatch(bidderLogout());
        }}
      >
        Logout
      </button>
    </>
  );
}

export default ProfilePage;
