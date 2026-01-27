import { useState } from 'react'
import '../../css/Main.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

function CardProjeto() {
    return (
        <div className="card1 center-col bg-blue-700">
            <div className="center">
                <a href="https://vite.dev" target="_blank">
                    <img src="https://placehold.co/220x230" className="logo" alt="Vite logo" />
                </a>
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