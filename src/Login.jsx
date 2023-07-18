import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="username"
          placeholder="Enter Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />

        <input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label id="show" onClick={handleShow}>
          Show
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
      <a onClick={() => props.onFormSwitch("register")} href="#">
        Don't have a account? Signup here
      </a>
    </div>
  );
};
