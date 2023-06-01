import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MiniGame from "./feautures/MiniGame";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar></NavBar>
        </header>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/minigame/*" element={<MiniGame />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
