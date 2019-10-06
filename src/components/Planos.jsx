import React from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
	<section id="planos">
		<div className="container">
			<h2>Um plano que se encaixa com você</h2>
			<p>Calcule o quanto você pode economizar com o nosso serviço. Basta clicar no item que você possui para adicionar e avançar para o próximo cômodo.</p>
			<div className="plano">
				<div className="card-blue">
					<div className="card-header">
						<b>PLANO BLUE</b><br/><b className="valor">900</b>kw por mês
					</div>
					<div className="card-body">
						<div className="card-text">O plano inteligente é feito para você que quer kilowatts suficiente para toda sua casa</div>
					</div>
					<div className="card-footer">
						<div className="card-text">R$ 149,90</div>
					</div>
				</div>
				<div className="card-white">
					<div className="card-header">
						<b>PLANO WHITE</b><br/><b className="valor">1900</b>kw por mês
					</div>
					<div className="card-body">
						<div className="card-text">O plano inteligente é feito para você que quer kilowatts suficiente para toda sua casa</div>
					</div>
					<div className="card-footer">
						<div className="card-text">R$ 249,90</div>
					</div>
				</div>

				<div className="card-green">
					<div className="card-header">
						<b>PLANO GREEN</b><br/><b className="valor">2100</b>kw por mês
					</div>
					<div className="card-body">
						<div className="card-text">O plano inteligente é feito para você que quer kilowatts suficiente para toda sua casa</div>
					</div>
					<div className="card-footer">
						<div className="card-text">R$ 299,90</div>
					</div>
				</div>
			</div>
		</div>
	</section>