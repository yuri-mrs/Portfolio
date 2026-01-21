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
            <h2 class="card-title" >CardCursoProjeto</h2>
            <div class="center">
                    <button class="">
                        Github
                    </button>
                    <button class="">
                        Pagina
                    </button>
            </div>
            <p class="center">
                descrição do Projeto
            </p>
        </div>
    )
}

export default CardProjeto