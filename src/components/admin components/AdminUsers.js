import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="user--page">
      {users.map((item) => {
        return (
          <div className="user--container">
            <ul className="user--list">
              <li>Email: {item.email} </li>
              <li>Username: {item.username} </li>
              <li>Name: {item.name}</li>
              <li>Admin : {item.isAdmin == true ? "Yes" : "No"}</li>
            </ul>
            <div className="admin--user--btn">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
