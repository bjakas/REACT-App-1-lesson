import SignInForm from "../../containers/SignInForm";
import "./SignInPage.css";

export default function SignInPage() {
  const handleSignIn = (state) => {
    console.log('handleSignIn', state);
  }

  return (
    <div className="SignInPage">
      <div className="SignInPage__title">
        <h1>Sign in</h1>
      </div>
      <div className="SignInPage__form">
        <SignInForm onSignIn={handleSignIn} />
      </div>
    </div>
  );
}