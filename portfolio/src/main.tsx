import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CardCurso from './assets/components/cards/CardCurso.tsx'
import CardExperiencia from './assets/components/cards/CardExperiencia.tsx'
import CardProjeto from './assets/components/cards/CardProjeto.tsx'

import MenuSocial from './assets/components/menus/MenuSocial.tsx'
import MenuZonas from './assets/components/menus/MenuZonas.tsx'

import BannerTopo from './assets/components/banners/BannerTopo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='center-col'>
      <BannerTopo/>
      <CardProjeto/>
      <CardCurso/>
      <CardExperiencia/>
    </div>

  </StrictMode>,
)
