import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Playground from "./component/playground/Playground";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} /> 
          <Route path="/playground"  element={<Playground />} /> 
        </Routes>                                                                              
    </BrowserRouter>
    </>
  );
}

export default App;
