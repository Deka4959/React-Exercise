import React, { useState } from "react";

function LogedInForm() {

  const [logIn, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const logInEvent = () => {
    setLogin(true);
  };

  return (
    <>
      <h1>Login Form</h1>

      <label>User Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}required />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={logInEvent}>Login</button>

      <h1>
        {logIn ? `Welcome ${name}` : "You're not a user"}
      </h1>
     
    </>
  );


}

export default LogedInForm;