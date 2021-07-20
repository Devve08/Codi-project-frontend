import React from "react";
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

function App() {
  const [usernameToken, setUsernameToken] = useState(false); // Token State
  const [cartInfos, setCartInfos] = useState([]);

  useEffect(() => {
    let localToken = localStorage.getItem("token"); // Token Auth
    Axios.post("http://localhost:4000/user/login", {
      token: localToken,
    })
      .then((res) => {
        // console.log(res.data);
        setUsernameToken(res.data.Token.value);
        setCartInfos(res.data.doc);
        console.log({ cart: res.data.doc });
      })
      .catch((e) => {
        setUsernameToken(false);
        // localStorage.setItem("token", "");
        // console.log({ Token: e });
      });
    console.log(cartInfos);
  }, []);

  const tokenHandler = () => {
    localStorage.setItem("token", "");
    setUsernameToken(false);
  };

  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          <ProductProvider cartInfos={cartInfos}>
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
              {/* <Route exact path="/">
              <ProductProvider>
                <Header
                  usernameToken={usernameToken}
                  tokenHandler={tokenHandler}
                />
                <Homepage />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/shopwomen">
              <ProductProvider>
                <Header />
                <ShopWomen />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/shopmen">
              <ProductProvider>
                <Header />
                <ShopMen />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/contactus">
              <ProductProvider>
                <Header />
                <Contact />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/sale">
              <ProductProvider>
                <Header />
                <Sale />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/product/:id">
              <ProductProvider>
                <Header />
                <Product />
                <Footer />
              </ProductProvider>
            </Route>
            <Route path="/cart">
              <ProductProvider>
                <Header />
                <ShopHeader title="Shopping cart" />
                <Cart />
                <Footer />
              </ProductProvider>
            </Route> */}
            </Switch>
            <Footer />
          </ProductProvider>
        </div>
      </>
    </Router>
  );
}

export default App;
