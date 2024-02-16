import Categorias from "./componentes/Categorias/Categorias";
import Footer from "./componentes/Footer/Footer";
import Hero from "./componentes/Hero/Hero";
import Layout from "./componentes/Layout/Layout";
import Navbar from "./componentes/Navbar/Navbar";
import CardsProductos from "./componentes/Productos/CardsProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <Categorias />
        <CardsProductos />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
