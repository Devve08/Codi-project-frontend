import React from "react";
import "./Admin.css";
import AdminNavbar from "../../components/admin components/AdminNavbar";
import AdminProducts from "../../components/admin components/AdminProducts";
import AdminUsers from "../../components/admin components/AdminUsers";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import AddUser from "../../components/admin components/AddUser";


export default function Admin() {
  return (
    
    <div className="admin--container">
      <Router>
          <AdminNavbar />
      <Switch>
        <Route path="/admin/products">
        <AdminProducts />
        </Route>
        <Route path="/admin/users">
          <AdminUsers />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
        </Switch>
      </Router>
  
           
          
      
    </div>
  );
}
