import {  Routes, Route } from "react-router-dom"; 
import Home from "../Home/Home";
import CountDownTemp from "../../feautures/TemplateCountDown";
import { BrowserRouter } from "react-router-dom/dist";

function Main() {
  return (
    <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/template/*" element={<CountDownTemp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
