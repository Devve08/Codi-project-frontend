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

function App() {
  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          {/* <Header /> */}
          <Switch>
            {/* <Route exact path="/" component={Homepage} />
            <Route path="/shopwomen" component={ShopWomen} />
            <Route path="/shopmen" component={ShopMen} />
            <Route path="/contactus" component={Contact} />
            <Route path="/sale" component={Sale} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart">
              <ProductProvider>
                <Cart />
              </ProductProvider>
            </Route> */}
            <Route exact path="/">
              <ProductProvider>
                <Homepage />
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
            </Route>
          </Switch>
          {/* <Footer /> */}
        </div>
      </>
    </Router>
  );
}

export default App;
