import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import Footer from "./component/footer/Footer";
import Templates from "./component/templates/Templates";
import Playground from "./component/playground/Playground";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} /> 
          <Route path="/login"  element={<Login />} /> 
          <Route path="/register"  element={<Register />} /> 
          <Route path="/templates"  element={<Templates />} /> 
          <Route path="/playground"  element={<Playground />} />
        </Routes>      
        <Footer />                                                                                                                                                      
    </BrowserRouter>
    </>
  );
}

export default App;
