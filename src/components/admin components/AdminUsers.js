import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/user/users")
      .then((res) => {
        setUsers(res.data.user);
        console.log(res.data.user);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <>
      <Link to="/add-user">
      <button className="add--user"> <i class="fas fa-plus"></i> New User</button>
      </Link>
     
    <table className="user--page">
        <tr className="table--header">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>

      {users.map((item) => {
        return (
         <tr className="table--data">
             <td>{item.name}</td>
             <td>{item.username}</td>
             <td>{item.email}</td>
             <td>{item.isAdmin === true ? "Yes" : "No"}</td>
             <td><i class="fas fa-pen"></i></td>
             <td><i class="fas fa-trash-alt"></i></td>
         </tr>
        );
      })}
    </table>
    </>
  );
}
