import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submit sucessfully");
    console.log(`UserName:${name} and Password:${password}`)
  };
  return (
    <>
      <div className="border border-white text-white p-4 m-4 w-xl">
        <h1 className="font-bold text-center">Form In React</h1>
        <p className="font-bold">
          Example:Create a form with basic validation and input handling.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap m-1">
            <label>UserName:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter You Name"
              className="border rounded-xl p-0.5"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap m-1">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter You Password"
              className="border rounded-xl p-0.5"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="border rounded-xl text-cyan-700 p-2 cursor-pointer mt-1"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
