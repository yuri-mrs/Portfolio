import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

import CardCurso from './assets/components/cards/CardCurso.tsx'
import CardExperiencia from './assets/components/cards/CardExperiencia.tsx'
import CardProjeto from './assets/components/cards/CardProjeto.tsx'

import Menu-social from './assets/components/menus/Menu-social.tsx'
import Menu-zonas from './assets/components/menus/Menu-zonas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardCurso />
  </StrictMode>,
)
