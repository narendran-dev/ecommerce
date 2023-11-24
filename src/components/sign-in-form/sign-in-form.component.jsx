import { useState } from "react";
import {
  SigInAuthUser,
  siginWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
const defaultValues = {
  email: "",
  password: "",
};
import { ButtonsContainer, SignInContainer } from "./sign-in-form.style";
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
      await SigInAuthUser(email, password);
      handleReset();
    } catch (error) {
      console.log(error);
    }
  };
  const logGoogleUser = async () => {
    await siginWithGooglePopup();
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
