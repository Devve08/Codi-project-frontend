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

function App() {
  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/shopwomen">
              <Header />
              <ShopWomen />
              <Footer />
            </Route>
            <Route path="/shopmen">
              <Header />
              <ShopMen />
              <Footer />
            </Route>
            <Route path="/contactus">
              <Header />
              <Contact />
              <Footer />
            </Route>
            <Route path="/sale">
              <Header />
              <Sale />
              <Footer />
            </Route>
            <Route path="/product/:id">
            <Header />
              <Product />
              <Footer />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
