import { useState } from "react";
import {
  SigInAuthUser,
  createUserDocFromAuth,
  siginWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";
const defaultValues = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [FormFields, setFormFields] = useState(defaultValues);

  const { email, password } = FormFields;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormFields({ ...FormFields, [name]: value });
  };
  const handleReset = () => {
    setFormFields(defaultValues);
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!password) {
      alert("password and userName NotMatched");

      return;
    }
    try {
      const { user } = await SigInAuthUser(email, password);
console.log(user);
      handleReset();
    } catch (error) {
      console.log(error);
    }
  };
  const logGoogleUser = async () => {
    const { user } = await siginWithGooglePopup();
    const userdocRef = await createUserDocFromAuth(user);
    console.log(userdocRef);
  };

  return (
    <div className="sign-in-container">
         <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable={"Email"}
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          required
        />
        <FormInput
          lable={"Password"}
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          required
        />
        <div className="buttons-container">
          <Button  type="submit">
            Sign In
          </Button>
          <Button onClick={logGoogleUser} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
