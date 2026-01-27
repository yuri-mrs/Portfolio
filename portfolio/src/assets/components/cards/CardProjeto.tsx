import { useState } from 'react'
import '../../css/Main.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

function CardProjeto() {
    return (
        <div className="card1 center-col border-8 border-double rounded-lg bg-teal-700">
            <div className="center">
                <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
            </div>
            <h2 className="card-title" >CardProjeto</h2>
            <div className="center gap-5">
                    <button className="buttom-card">
                        <GitHubIcon fontSize="large"/>
                    </button>
                    <button className="buttom-card">
                        <PublicIcon fontSize="large"/>
                    </button>
            </div>
            <p className="center">
                descrição do Projeto
            </p>
        </div>
    )
}

export default CardProjeto