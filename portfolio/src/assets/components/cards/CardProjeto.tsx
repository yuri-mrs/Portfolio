import { useState } from 'react'
import '../../css/Main.css'

import from ProjetoData

export default function CardProjeto() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white center">
                Lista de Projetos
            </h2>
            <div className="card1 center-col border-8 border-double rounded-lg bg-teal-700">
                <div className="center">
                    <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
                </div>
                <h2 className="card-title" ></h2>
                <div className="center gap-5">
                    <button className="buttom-card">
                        
                    </button>
                    <button className="buttom-card">
                        
                    </button>
                </div>
                <p className="center"></p>
            </div>
        </div>
    )
}