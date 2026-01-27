import { useState } from 'react'
import '../../css/Main.css'

function CardProjeto({ title, description, icon1: Icon1,icon2: Icon2 }) {
    return (
        <div className="card1 center-col border-8 border-double rounded-lg bg-teal-700">
            <div className="center">
                <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
            </div>
            <h2 className="card-title" >{title}</h2>
            <div className="center gap-5">
                    <button className="buttom-card">
                        <Icon1/>
                    </button>
                    <button className="buttom-card">
                        <Icon2/>
                    </button>
            </div>
            <p className="center">{description}</p>
        </div>
    )
}

export default CardProjeto