import React from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
    <section id="formulario">
          <div className="form">
            <div className="form-text">
              <h2><b>Vamos conversar um pouco!</b></h2>
              <p>Quer fazer uma pergunta que nosso site não te respondeu? Então vamos lá, faça por aqui. Te responderemos o mais breve possível!</p>
              <p>Mande sua dúvida também pelas nossas REDES SOCIAIS</p>
              <a href=""><i className="fa fa-instagram"></i></a>
              <a href=""><i className="fa fa-facebook"></i></a>
              </div>
              <form className="contato">
                <div class="form-group">
                  <input type="name" class="form-control" id="exampleInputName" placeholder="Nome"/>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail" placeholder="Email"/>
                </div>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensagem"></textarea>
                  <br/>
                <a class="btn-geral">Enviar</a>
              </form>
          </div>
    </section>