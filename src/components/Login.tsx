import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formDatalogin, setFormDatalogin] = useState({
    username: '',
    password: ''
  })

 const {username, password} = formDatalogin;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`http://localhost:420/api/user?username=${username}&password=${password}`).then((res)=>{
    localStorage.setItem("Token",res.data.token);
    localStorage.setItem("id",res.data.id);  
    navigate("/homepage")});
    console.log(formDatalogin);
  };

  return (
   
        
       <div className="bg-white h-screen flex items-center justify-center">
        
        <form onSubmit={handleSubmit} className="bg-white p-10 shadow-lg">
          <h1 className="text-3xl font-bold mb-5 text-center">Login WEBBUGS</h1>
          <div className="mb-5">
            <label htmlFor="email" className="block font-bold mb-2">
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setFormDatalogin({...formDatalogin, username: e.target.value})}
              className="w-full border border-gray-400 p-2"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setFormDatalogin({...formDatalogin, password: e.target.value})}
              className="w-full border border-gray-400 p-2"
              required
            />
          </div>
          <button className="bg-teal-600 text-white p-2 w-full">
            Login
          </button>
        </form>
      </div>

    
  );
};

export default Login;
