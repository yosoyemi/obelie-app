import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Carrucel from './pages/home';
import Sucursales from './pages/sucursales';
import EventosBodas from './pages/EventosBodas';
import Bodas from './pages/Bodas';
import Eventos from './pages/Eventos';
import PhotoCarousel from './components/PhotoCarousel';
import Shop from './pages/shop';
import ReservationForm from './pages/quiz/reservacionfroms';
import OrdenEspecial from './pages/quiz/ordenespecial';
import Quiz from './pages/quiz/quiz';
import './animations.css';
import PC from "./pages/pasteles/pc";
import PCE from "./pages/pasteles/pce";
import PE from "./pages/pasteles/pe";
import PO from "./pages/pasteles/po";
import PQ from "./pages/pasteles/pq";
import PF from "./pages/pasteles/pf";
import PZ from "./pages/pasteles/pz";
import PCH from "./pages/pasteles/pch";
import PT from "./pages/pasteles/pt";
import PSN from "./pages/pasteles/psn";
import PRP from "./pages/pasteles/prp";
import PBY from "./pages/pasteles/pby";
import PG from './pages/pasteles/pg';
import PDL from './pages/pasteles/dl';
import WordSearchGame from './components/WordSearchGame';

const Home = () => (
  <div className="mt-60 md:mt-60 mb-20">
    <Carrucel />
    <div className="md:hidden mt-40 mb-20">
      <PhotoCarousel />
    </div>
    <div>
      <WordSearchGame />
    </div>
  </div>
);

const About = () => <div>About Page</div>;

function App() {
  return (
    <Router>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/eventos-bodas" element={<EventosBodas />} />
          <Route path="/bodas" element={<Bodas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pg" element={<PG />} />
          <Route path="/pdl" element={<PDL />} />
          <Route path="/pc" element={<PC />} />
          <Route path="/pce" element={<PCE />} />
          <Route path="/pe" element={<PE />} />
          <Route path="/pf" element={<PF />} />
          <Route path="/pch" element={<PCH />} />
          <Route path="/prp" element={<PRP />} />
          <Route path="/pby" element={<PBY />} />
          <Route path="/psn" element={<PSN />} />
          <Route path="/po" element={<PO />} />
          <Route path="/pq" element={<PQ />} />
          <Route path="/pz" element={<PZ />} />
          <Route path="/pt" element={<PT />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/special-order" element={<OrdenEspecial />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
