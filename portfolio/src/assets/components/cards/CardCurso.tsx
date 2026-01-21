import { useState } from 'react'
import '../../css/Main.css'

function CardCurso() {
    return (
        <div class="card2 center-col bg-amber-700">
            <h2 class="card-title">
                CardCursoInfo
            </h2>
            <div class="justify-center flex">
                <button>
                    Pagina
                </button>
            </div>
            <p class="justify-center flex">
                descrição do curso
            </p>
        </div>
    )
}

export default CardCurso