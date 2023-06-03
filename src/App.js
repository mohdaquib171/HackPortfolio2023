import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
<<<<<<< HEAD
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import Footer from "./component/footer/Footer";
import Templates from "./component/templates/Templates";
=======
import Playground from "./component/playground/Playground";
>>>>>>> 46055d0495fca9460f49b12fb7a4b03214e652a4

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} /> 
<<<<<<< HEAD
          <Route path="/login"  element={<Login />} /> 
          <Route path="/register"  element={<Register />} /> 
          <Route path="/templates"  element={<Templates />} /> 
        </Routes>      
        <Footer />                                                                        
=======
          <Route path="/playground"  element={<Playground />} /> 
        </Routes>                                                                              
>>>>>>> 46055d0495fca9460f49b12fb7a4b03214e652a4
    </BrowserRouter>
    </>
  );
}

export default App;
