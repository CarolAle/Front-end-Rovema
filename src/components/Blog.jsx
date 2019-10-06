import React from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'
import imgblog from '../assets/images/img-blog.png'

export default props =>
    <section id="blog">
        <div className="container">
            
            <h2>Nosso Blog, <br/>feito para você!</h2>
            <p>Se manter informado sobre economia é super importante, então temos um espaço exclusivo para te ajudar, dando dicas e informativos!</p>
            <div className="row">
                <div className="card-blog">
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Parceria: Clientes Uzzipay tem 5% de desconto nos planos Green e Blue</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                                    <p class="card-text"><small class="text-muted">Continuar lendo</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src={ imgblog } class="card-img" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-secundario">
                    <div className="card">
                        <div className="card-title">Parceria: Clientes Uzzipay tem 5% de desconto nos planos Green e Blue</div>
                        <a className="btn-dica" href="">Dica</a>
                    </div>
                    <div className="card">
                        <div className="card-title">NOVO: Plano White, nem muito, nem pouco. O ideal para </div>
                        <a className="btn-info" href="">Informativo</a>
                    </div>
                    <div className="card">
                        <div className="card-title">AJUSTE: Planos Green e Blue recebem aumento nos KW/mês</div>
                        <a className="btn-info" href="">Informativo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>