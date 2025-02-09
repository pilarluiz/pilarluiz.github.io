import "./App.css";
// import Navbar from "./components/Navbar";
import NavBarBS from "./components/NavBarBS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import UpdatedHome from "./components/pages/UpdatedHome";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <NavBarBS />
        <Routes>
          {/* <Home /> -- Pass React.element; Home -- pass function */}
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/updated-home" exact element={<UpdatedHome />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
