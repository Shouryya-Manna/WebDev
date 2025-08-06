import React, { useState } from "react";
import {useUserContext} from "../Context/UserContextProvider";
function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className=" flex flex-col items-center">
      <div className=" text-3xl ">Profile</div>
      <input className=" border-2 border-black rounded-xl p-1 mt-4 m-2" 
      type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />
      <input className=" border-2 border-black rounded-xl p-1 m-2"
      type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button className=" border-2 border-black rounded-xl p-1 m-2 bg-blue-400"
      onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
