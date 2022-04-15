import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);
    const onEmailBlur = e => {
        setEmail(e.target.value)
    }
    const onPasswordBlur = e => {
        setPassword(e.target.value)
    }
    const onFormSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
  return (
    <div className="login-container">
      <h1 className="login-title">Sign In</h1>
      <form onSubmit={onFormSubmit}  className="login-form">
      
        <input onBlur={onEmailBlur} type="email" name="" id="" placeholder="Email" />
        <input onBlur={onPasswordBlur} type="password" name="" id="" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
