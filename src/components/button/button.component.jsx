import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <>
      {!buttonType ? (
        <BaseButton {...otherProps}>{children}</BaseButton>
      ) : buttonType === BUTTON_TYPE_CLASSES.google ? (
        <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
      ) : (
        <InvertedButton {...otherProps}>{children}</InvertedButton>
      )}
    </>
  );
};

export default Button;
