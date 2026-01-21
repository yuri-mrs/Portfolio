import { useState } from 'react'
import '../../css/Main.css'

function CardExperiencia() {
    return (
        <div class="justify-center flex-col bg-purple-700 m-auto p-5 w-70 h-50 ">
            <h2 class="text-2xl font-bold underline justify-center flex">ExperienciaInfo</h2>
            <div class="justify-center flex">
                <button>
                    Link da experiencia
                </button>
            </div>
            <p class="justify-center flex">
                descrição da experiencia
            </p>
        </div>
    )
}

export default CardExperiencia