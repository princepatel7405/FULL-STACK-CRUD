import React, {  useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    //console.log(payload);

    fetch(`https://prickly-trench-coat-colt.cyclic.app/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
          "Content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((res) => {console.log(res)
      localStorage.setItem("token",res.token)
      })
      
      .catch((err) => console.log(err));
      alert("You have successfully Logged in")
  };


  return (
    <>
      <h1>Log In</h1>
      <form action="" onSubmit={(e)=>submitHandler(e)}>

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

export default Login;
