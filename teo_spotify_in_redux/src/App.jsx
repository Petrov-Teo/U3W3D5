import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarSpotify from "./components/NavbarSpotify";
import HomeSpotify from "./components/HomeSpotify";
import TopComponentsList from "./components/TopComponentsList";

import ElementNotFound from "./components/ElementNotFound";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavbarSpotify />
        <Routes>
          <Route path="/:componentSelected" element={<TopComponentsList />} />
          <Route path="/" element={<HomeSpotify />} />
          <Route path="*" element={<ElementNotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
