import { useState } from 'react'
import '../../css/Main.css'

function CardProjeto() {
    return (
        <div className="card1 center-col bg-blue-700">
            <div className="center">
                <a href="https://vite.dev" target="_blank">
                    <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h2 className="card-title" >CardProjeto</h2>
            <div className="center">
                    <button className="buttom-card">
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                            alt="Pagina do Github" 
                            className="icon"
                        />
                    </button>
                    <button className="buttom-card">
                        <img src="" alt="Site do Projeto" />
                    </button>
            </div>
            <p className="center">
                descrição do Projeto
            </p>
        </div>
    )
}

export default CardProjeto