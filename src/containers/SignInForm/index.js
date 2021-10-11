import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import FormButton from "../../components/FormButton";
import "./SignInForm.css";

export default function SignInForm({ onSignIn }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setState((currentState) => ({
      ...currentState,
      [event.target.name]: event.target.value
    }));
  }

  const sendMessage = (event) => {
    event.preventDefault();
    onSignIn(state);
  };

  return (
    <form className="SignInForm" onSubmit={sendMessage}>
      <div className="SignInForm__row">
        <TextInput
          label={<div>Username:</div>}
          onChange={handleOnChange}
          value={state.username}
          inputProps={{
            name: "username", id: "username", placeholder: "Username"
          }}
        />
      </div>
      <div className="SignInForm__row">
        <PasswordInput
          label={<div>Password:</div>}
          onChange={handleOnChange}
          value={state.password}
          inputProps={{
            name: "password", id: "password", placeholder: "Password"
          }}
        />
      </div>
      <div className="SignInForm__row">
        <FormButton type="submit">Sign in</FormButton>
      </div>
    </form>
  );
}

SignInForm.propTypes = {
  onSendMessage: PropTypes.func,
};