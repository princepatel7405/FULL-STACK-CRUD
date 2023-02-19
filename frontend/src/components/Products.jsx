import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const Products = () => {
const [state,setState]=useState([])


const deleteHandler=(id)=>{
        fetch(`https://prickly-trench-coat-colt.cyclic.app/product/deleteproduct/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
}

  useEffect(() => {
    fetch("http://localhost:8080/product",{
        headers:{
            "Authorization": localStorage.getItem("token")
        }
    })
      .then((res) => res.json())
      .then((res) => {console.log(res)
    setState(res)
    })
      .catch((err) => console.error(err))
  }, []);
  return <div>
    <h1>All Products</h1>
    {state.map((e)=>{
        return (
            <div style={{border:"1px solid red"}}>
                <h1>{e.Company_name}</h1>
                <h3>HP:{e.HP}</h3>
                <h3>RPM:{e.rpm}</h3>
                <h3>Price:{e.price}</h3>
                <img src={e.Image} alt={e.Company_name}/>
                <button onClick={()=>deleteHandler(e._id)}>Delete</button>
                <button>
                    <NavLink to={`/product/updateproduct/${e._id}`}>

                    Update
                    </NavLink>
                    </button>
                
            </div>
        )
    })}
  </div>;
};

export default Products;
