import React, {  useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState();
  const [rpm, setRpm] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      "Company_name":name,
      "HP":hp,
      "rpm":rpm,
      "price":price,
      "Image":image
    };
    //console.log(payload);

    fetch("https://prickly-trench-coat-colt.cyclic.app/product/addproduct", {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
          "Content-type": "application/json",
          "Authorization":localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      alert("You have successfully Registered")
  };


  return (
    <>
      <h1>Register Product</h1>
      <form action="" onSubmit={(e)=>submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter Company Name Here"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter HP Here"
          value={hp}
          onChange={(e) => {
            setHp(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Rpm Here"
          value={rpm}
          onChange={(e) => {
            setRpm(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Price Here"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <input
          type="url"
          placeholder="Enter Image url Here"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <input type={"submit"} value="Submit" />
      </form>
    </>
  );
};

export default AddProduct;
