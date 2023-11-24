import { useState } from "react";
import {
  createAuthUser,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.style";
const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [FormFields, setFormFields] = useState(defaultValues);

  const { displayName, email, password, confirmPassword } = FormFields;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormFields({ ...FormFields, [name]: value });
  };
  const handleReset = () => {
    setFormFields(defaultValues);
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      alert("password and userName NotMatched");

      return;
    }
    try {
      const { user } = await createAuthUser(email, password);
      await createUserDocFromAuth(user, {
        displayName,
      });

      handleReset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpContainer>
      <h2>Don`t have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable={"Display Name"}
          onChange={handleChange}
          value={displayName}
          name="displayName"
          type="text"
          required
        />
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

        <FormInput
          lable={"Confirm Password"}
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
