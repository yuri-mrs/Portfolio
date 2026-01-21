import { useState } from 'react'
import '../../css/Main.css'

function CardProjeto() {
    return (
        <div class="justify-center flex-col bg-blue-700 m-auto p-5 w-70 h-100">
            <div class="justify-center flex">
                <a href="https://vite.dev" target="_blank">
                    <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h2 class="text-2xl font-bold underline justify-center flex" >CardCursoProjeto</h2>
            <div class="justify-center flex">
                    <button class="">
                        Github
                    </button>
                    <button class="">
                        Pagina
                    </button>
            </div>
            <p className="read-the-docs justify-center flex">
                descrição do Projeto
            </p>
        </div>
    )
}

export default CardProjeto