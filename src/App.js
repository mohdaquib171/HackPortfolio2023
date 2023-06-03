import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} /> 
        </Routes>                                                                              
    </BrowserRouter>
    </>
  );
}

export default App;
