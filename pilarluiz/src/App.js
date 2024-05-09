import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Home /> -- Pass React.element; Home -- pass function */}
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
