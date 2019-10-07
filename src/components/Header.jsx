import React from 'react';
import '../assets/css/Style.css'
import 'jquery/dist/jquery.js'
import Logo from '../assets/images/logo-rovema.png'

export default props =>
	<header>
    <div className="nav menu">
       <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="{{ route('home') }}">
          <img src={ Logo } class="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item active"><a className="nav-link" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#sustentabilidade">SUSTENTABILIDADE</a></li>
            <li className="nav-item"><a className="nav-link" href="#calculadora">CALCULADORA</a></li>
            <li className="nav-item"><a className="nav-link" href="#planos">NOSSOS PLANO</a></li>
            <li className="nav-item"><a className="nav-link" href="#blog">BLOG</a></li>
            <li className="nav-item"><a className="nav-link" className="btn-geral" href="#">Para Empresa</a></li>
          </ul>
        </div>
    </nav>
    <div className="titulo">
                <h1>Construindo um futuro com energia</h1>
                <a className="btn-geral">Contratar</a>
            </div>


        </div>
	</header>
