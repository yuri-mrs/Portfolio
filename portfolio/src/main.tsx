import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

import CardCurso from './assets/components/cards/CardCurso.tsx'
import CardExperiencia from './assets/components/cards/CardExperiencia.tsx'
import CardProjeto from './assets/components/cards/CardProjeto.tsx'

import MenuSocial from './assets/components/menus/MenuSocial.tsx'
import MenuZonas from './assets/components/menus/MenuZonas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardCurso />
  </StrictMode>,
)
