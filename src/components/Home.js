import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:3001/posts");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
     await axios.delete(`http://localhost:3001/posts/${id}`);
    getUsers();
  };

  return (
    <div className=" mx-auto container p-4">
      <div className="text-center mb-2  ">
        <Link to="/pages/add" className="btn btn-primary">
          Add User
        </Link>
      </div>
      <div className="container shadow p-2 table-responsive">
        <table className="table table-hover">
          <thead className="thead-primary">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((post, index) => (
              <tr key={post.id}>
                <th scope="row"> {index + 1}</th>
                <td>{post.name}</td>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>
                  <Link to={`/pages/edit/${post.id}`} className="me-4">
                    <EditIcon color="primary" variant="contained" />
                  </Link>
                  <Link to="/" onClick={() => deleteUser(post.id)} className="me-2">
                    <DeleteIcon color="secondary" variant="contained" />{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
