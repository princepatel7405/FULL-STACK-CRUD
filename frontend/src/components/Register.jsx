import React, {  useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    //console.log(payload);

    fetch(`https://prickly-trench-coat-colt.cyclic.app/login/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
          "Content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      alert("You have successfully Registered")
  };


  return (
    <>
      <h1>Register</h1>
      <form action="" onSubmit={(e)=>submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter Name Here"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type={"submit"} value="Submit" />
      </form>
    </>
  );
};

export default Register;
