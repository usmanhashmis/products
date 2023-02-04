import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Addproduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
   
  const {id} = useParams();
  const data = {
    title: name,
    description,
    price,
    userId
  };

  useEffect(()=>{
      if(id){
        axios.get(`http://localhost:420/api/products/${id}`).then((res)=>{
          setName(res.data.title)
          setDescription(res.data.description)
          setPrice(res.data.price)
           //console.log(res.data);
        });
      }
  },[])


  function submitForm(e) {
    e.preventDefault();
    if(id){
      axios.put(`http://localhost:420/api/products/${id}`,data).then((res)=>{
          navigate("/")
           //console.log(res.data);
        });
    }
    else{
      axios.post("http://localhost:420/api/products/", data).then(navigate("/"));
    }
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD Product</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Product Name"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Product Description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Product Price"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default Addproduct;