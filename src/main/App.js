import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.js'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import './App.css';

import Header from '../components/Header'
import Sobre from '../components/Sobre'
import Calculadora from '../components/Calculadora'
import Planos from '../components/Planos'
import Blog from '../components/Blog'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
    <Header />
    <Sobre />
    <Calculadora />
    <Planos />
    <Blog />
    <Formulario />
    <Footer />
    </div>
  );
}

export default App;
