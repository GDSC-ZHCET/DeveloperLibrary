import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
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
        <br />
        <button type="submit">Register</button>
        <button type="reset">Reset</button>
      </form>
      <a onClick={() => props.onFormSwitch("login")} href="./">
        Already have a account? Log in
      </a>
    </div>
  );
};
