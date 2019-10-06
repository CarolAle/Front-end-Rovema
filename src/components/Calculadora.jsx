import React from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
	<section id="calculadora">
		<div className="container">
			<h2>Veja quanto você pode economizar!</h2>
			<p>Calcule o quanto você pode economizar com o nosso serviço. Basta clicar no item que você possui para adicionar e avançar para o próximo cômodo.</p>
			<form className="calc">
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
					<label className="form-check-label" for="inlineRadio1">Quarto</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
					<label className="form-check-label" for="inlineRadio2">Cozinha</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
					<label className="form-check-label" for="inlineRadio3">Banheiro</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
					<label className="form-check-label" for="inlineRadio4">Sala</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
					<label className="form-check-label" for="inlineRadio5">Externo</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option6"/>
					<label className="form-check-label" for="inlineRadio5">Outras</label>
				</div>
				</form>
				<div className="items">
					<a href="#" className="itens">Televisor</a>
					<a href="#" className="itens">Computador</a>
					<a href="#" className="itens">Notebook</a>
					<a href="#" className="itens">Luminária</a>
					<a href="#" className="itens">Ar Condic.</a>
					<a href="#" className="itens">Roteador</a>
					<a href="#" className="itens">Ventilador</a>
					<a href="#" className="itens">Hometheater</a>
				</div>
				<p>Tem algo que não está na lista? Clique para adicionar.</p>
				<div className="add">
					<a href="#"><i class="fa fa-plus" aria-hidden="true"></i>Adicionar outro</a>
					<div className="final">
						<a href="#">Finalizar</a>
						<a className="btn-geral" href="#">Avançar</a>
					</div>
					
				</div>
				
		</div>
	</section>