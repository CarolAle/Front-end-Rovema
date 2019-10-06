import React from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'
import energia from "../assets/images/energia.png"
import tecnologia from "../assets/images/tecnologia.png"
import natureza from "../assets/images/natureza.png"
import valor from "../assets/images/valor.png"


export default props =>
	<section className="sustentabilidade">
		<div className="container">
			<h2>Economia com</h2>
			<h1>Sustentabilidade</h1>
			<div className="sobre">
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
	 			<p>Lea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
	 			sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
	 			justo duo dolores et</p>
			</div>
			<div className="box">
				<div className="box-item">
					<img src={ natureza }/>
					<div className="box-info">
						<h3 className="box-natureza">NATUREZA</h3>
					</div>
				</div>
				<div className="box-item">
					<img src={ tecnologia }/>
					<div className="box-info">
						<h3 className="box-tecnologia">TECNOLOGIA</h3>
					</div>
				</div>
				<div className="box-item">
					<img src={ energia }/>
					<div className="box-info">
						<h3 className="box-energia">ENERGIA LIMPA</h3>
					</div>
				</div>
				<div className="box-item">
					<img src={ valor }/>
					<div className="box-info">
						<h3 className="box-valor">VALOR HUMANO</h3>
					</div>
				</div>
			</div>
			<a className="ver-mais" href="#"><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
		</div>
	</section>