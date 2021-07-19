import "./App.css";
import "./normalize.css";
import Homepage from "./pages/Homepage";
import ShopWomen from "./pages/ShopWomen";
import ShopMen from "./pages/ShopMen";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Sale from "./pages/Sale";
import Product from "./components/product/Product";
import Cart from "./pages/Cart";
import { ProductProvider } from "./contexts/ProductContext";
import ShopHeader from "./components/card/shopheader";
import Axios from "axios";
import { useEffect, useState } from "react";
import Admin from "./pages/admin dashboard/Admin";

function App() {
  const [usernameToken, setUsernameToken] = useState(false);

  useEffect(() => {
    let localToken = localStorage.getItem("token"); // Token Auth
    Axios.post("http://localhost:4000/user/login", {
      token: localToken,
    })
      .then((res) => {
        console.log(res);
        setUsernameToken(res.data.value);
      })
      .catch((e) => {
        setUsernameToken(false);
        console.log(e);
      });
  }, []);

  const tokenHandler = () => {
    localStorage.setItem("token", "");
    setUsernameToken(false);
  };

  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          <ProductProvider>
            <Header usernameToken={usernameToken} tokenHandler={tokenHandler} />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shopwomen" component={ShopWomen} />
              <Route path="/shopmen" component={ShopMen} />
              <Route path="/contactus" component={Contact} />
              <Route path="/sale" component={Sale} />
              <Route path="/product/:id" component={Product} />
              <Route path="/cart">
                <ShopHeader title="Shopping cart" />
                <Cart />
              </Route>
              <Route path= "/admin" component={Admin} />
            </Switch>
            <Footer />
          </ProductProvider>
        </div>
      </>
    </Router>
  );
}

export default App;
