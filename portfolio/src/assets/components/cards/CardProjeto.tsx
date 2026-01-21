import { useState } from 'react'
import '../../css/Main.css'

function CardProjeto() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src="https://placehold.co/300x200" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h2>CardCursoInfo</h2>
            <div className="card">
                <div>
                    <button>
                        Github
                    </button>
                    <button>
                        Pagina
                    </button>
                </div>
                <p>
                    
                </p>
            </div>
            <p className="read-the-docs">
                descrição do curso
            </p>
        </>
    )
}

export default CardProjeto