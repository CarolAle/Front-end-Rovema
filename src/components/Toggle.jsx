import React, { Component } from 'react'
import '../assets/css/Style.css'
import 'font-awesome/css/font-awesome.min.css'
import energia from "../assets/images/energia.png"
import tecnologia from "../assets/images/tecnologia.png"
import natureza from "../assets/images/natureza.png"
import valor from "../assets/images/valor.png"

export default class Toggle extends Component {
    constructor( props ) {
		super(props)
		this.state = { show: false }

		this.toggleDiv = this.toggleDiv.bind(this)
	}

	toggleDiv = () => {
		const { show } = this.state
		this.setState( { show : !show} )
    }
    
    render() {
        return (
            <div>
            <a className="ver-mais" onClick={ this.toggleDiv }><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
            { this.state.show && <Box /> }
            </div>
        )
    }
}

class Box extends Component {
    render() {
            return (
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
            )
        }
    }

