import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const history=useHistory();

  const inputHandle = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const saveUser = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/posts",user);
    history.push("/");

  };

  return (
    <div className="container p-4">
      <div className="w-75 mx-auto shadow p-5">
      <h3 className="text-center pb-4">Add User Details</h3>
        <form onSubmit={saveUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2 text-center"
              name="name"
              placeholder="enter name"
              value={user.name}
              onChange={inputHandle}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2 text-center"
              name="username"
              placeholder="username"
              value={user.username}
              onChange={inputHandle}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg m-2 text-center"
              name="email"
              placeholder="email"
              value={user.email}
              onChange={inputHandle}
            />
          </div>

          <div className="text-center">
            <button to="/pages/add" className="btn btn-primary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
