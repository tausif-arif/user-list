import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function loadUser() {
      const result = await axios.get(`http://localhost:3001/posts/${id}`);
      setUser(result.data);
    }
    loadUser();
  }, []);
  

  

  const inputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/posts/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container p-4">
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center pb-4">Update User Details</h3>
        <form onSubmit={updateUser}>
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
            <button to="/pages/edit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
