import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* <Home /> -- Pass React.element; Home -- pass function */}
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
