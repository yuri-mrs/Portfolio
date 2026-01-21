import { useState } from 'react'
import '../../css/Main.css'

function CardProjeto() {
    return (
        <div class="card1 center-col bg-blue-700">
            <div class="center">
                <a href="https://vite.dev" target="_blank">
                    <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h2 class="card-title" >CardProjeto</h2>
            <div class="center">
                    <button class="buttom-card">
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                            alt="Pagina do Github" 
                            class="icon"
                        />
                    </button>
                    <button class="buttom-card">
                        <img src="" alt="Site do Projeto" />
                    </button>
            </div>
            <p class="center">
                descrição do Projeto
            </p>
        </div>
    )
}

export default CardProjeto