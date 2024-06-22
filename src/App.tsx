import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projetos from './Pages/Projetos';
import Container from './layout/Container';
import NovoProjeto from './Pages/NovoProjeto';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/novo-projeto" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

