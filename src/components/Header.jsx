import React from 'react';
import '../assets/css/Style.css'

export default props =>
	<header>
    <div className="nav menu">
	{/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="{{ route('home') }}">
          <img src="#" width="30" height="30" class="d-inline-block align-top" alt=""/>
          Luana Medeiros
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a className="nav-link" href="#">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">SUSTENTABILIDADE</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">CALCULADORA</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">NOSSOS PLANO</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">BLOG</a></li>
                    <li className="nav-item"><a className="nav-link" className="btn-geral" href="#">Para Empresa</a></li>
                </ul>
			</div>
        	<div className="titulo">
        		<h1>Construindo um futuro com energia</h1>
        		<a className="btn-geral">Contratar</a>
        	</div>
			
		</nav>*/}
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="{{ route('home') }}">
          <img src="#" width="30" height="30" class="d-inline-block align-top" alt=""/>
         img
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item active"><a className="nav-link" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SUSTENTABILIDADE</a></li>
            <li className="nav-item"><a className="nav-link" href="#">CALCULADORA</a></li>
            <li className="nav-item"><a className="nav-link" href="#">NOSSOS PLANO</a></li>
            <li className="nav-item"><a className="nav-link" href="#">BLOG</a></li>
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
