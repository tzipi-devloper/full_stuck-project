import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authUserSlice";

const UploadButton = () => {
  const isLoggedIn = useSelector(selectCurrentUser);

  if (!isLoggedIn) return null;

  return (
    <button onClick={() => alert("פתח חלון העלאה")}>
      העלה תוצר לתחרות
    </button>
  );
};

export default UploadButton;
