import "./sign-in.style.scss";
import {
  createUserDocFromAuth,
  siginWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await siginWithGooglePopup();
    const userdocRef = await createUserDocFromAuth(user);
    console.log(userdocRef);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <h1>Sign In</h1>
    </div>
  );
};

export default SignIn;
