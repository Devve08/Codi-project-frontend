import "./App.css";
import "./normalize.css";
import Homepage from "./components/pages/Homepage";
import ShopWomen from "./components/pages/ShopWomen";
import ShopMen from "./components/pages/ShopMen";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";
import Sale from "./components/pages/Sale";

function App() {
  return (
    <Router>
    <>
      <div className="wrapper" id="wrapper">
      <Header/>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path='/shopwomen'>
            <ShopWomen />
            <Footer />
          </Route>
          <Route path='/shopmen'>
            <ShopMen />
            <Footer />
          </Route>
          <Route path='/contactus'>
            <Contact />
            <Footer />
          </Route>
          <Route path='/sale'>
            <Sale />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
    </Router>
  );
}

export default App;
