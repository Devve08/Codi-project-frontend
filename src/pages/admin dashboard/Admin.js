import React from "react";
import "./Admin.css";
import AdminNavbar from "../../components/admin components/AdminNavbar";
import AdminProducts from "../../components/admin components/AdminProducts";
import AdminUsers from "../../components/admin components/AdminUsers";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";


export default function Admin() {
  return (
    
    <div className="admin--container">

          <AdminNavbar />
      
        <Route path="/admin/products">
        <AdminProducts />
        </Route>
        <Route path="/admin/users">
          <AdminUsers />
        </Route>
  
           
          
      
    </div>
  );
}
