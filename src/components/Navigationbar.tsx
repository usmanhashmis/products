import React from 'react'
import { Link,  useNavigate} from 'react-router-dom'

function Navigationbar() {
  const navigate = useNavigate();
  return (
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
           
            <Link to={"/add-user"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Users</Link>
             <Link to={"/homepage"} className="text-3xl text-teal-200 font-semibold font-Montesarrat">WEBBUGS TASK</Link>
             <button className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
            onClick={()=>{
              
              localStorage.clear();
              navigate("/login");
            }}>Logout</button>
        </div>
    </>
  )
}

export default Navigationbar