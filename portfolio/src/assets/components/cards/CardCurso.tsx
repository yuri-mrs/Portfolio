import { useState } from 'react'
import '../../css/Main.css'

function CardCurso() {
    return (
        <div class="justify-center flex-col bg-amber-700">
            <h2 class="text-2xl font-bold underline">
                CardCursoInfo
            </h2>
            <div>
                <button>
                    Pagina
                </button>
            </div>
            <p className="read-the-docs">
                descrição do curso
            </p>
        </div>
    )
}

export default CardCurso