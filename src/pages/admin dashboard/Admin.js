import React from "react";
import "./Admin.css";
import AdminNavbar from "../../components/admin components/AdminNavbar";
import AdminProducts from "../../components/admin components/AdminProducts";
import AdminUsers from "../../components/admin components/AdminUsers";
import { BrowserRouter as  Route} from "react-router-dom";
import AddUser from "../../components/admin components/AddUser";
import UpdateUser from "../../components/admin components/UpdateUser";
import AddProduct from "../../components/admin components/AddProduct";

export default function Admin() {
  return (
    
    <div className="admin--container">
      
        <Route exact path="/admin">
        <AdminNavbar  />
        </Route>
        
    
        <Route exact path="/admin/products">
        <AdminProducts />
        </Route>
        <Route exact path="/admin/add-product">
        <AddProduct />
        </Route>
        <Route exact path="/admin/users">
          <AdminUsers />
        </Route>
        <Route exact path="/admin/add-user">
          <AddUser />
        </Route>
        <Route exact path="/admin/update-user/:id" >
          <UpdateUser />
        </Route>
        
    </div>
  
  );
}
