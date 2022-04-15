import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onEmailBlur = (e) => {
    setEamil(e.target.value);
    console.log(email);
  };
  const onPasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
        alert("Password didn't match")
        return
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Sign Up</h1>
      <form onSubmit={onFormSubmit} className="login-form">
        <input type="text" name="" id="" placeholder="Name" />
        <input
          onBlur={onEmailBlur}
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          onBlur={onPasswordBlur}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <input
          onBlur={onConfirmPasswordBlur}
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
