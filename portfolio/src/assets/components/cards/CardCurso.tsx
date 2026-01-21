import { useState } from 'react'
import '../../css/Main.css'

function CardCurso() {
    return (
        <div class="justify-center flex-col bg-amber-700 m-auto p-5 w-70 h-50">
            <h2 class="text-2xl font-bold underline justify-center flex">
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