import * as React from 'react';  
import { Route, Routes } from "react-router-dom";
import Dashboard from '../../feautures/Dashboard'; 
import NavBar from '../NavBar/NavBar';
import { Container } from '@mui/material';
import MiniGame from '../../feautures/MiniGame';

export default function Home() {
  return (
    <div>
        <header>
          <NavBar></NavBar>
        </header>

        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/minigame/*" element={<MiniGame />} />
          </Routes>
        </Container>
    </div>
  )
}
