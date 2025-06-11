import HomeScreen from './screens/HomeScreen.tsx'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-full bg-[url('/fundo.jpg')] h-[100dvh] flex justify-center text-white bg-cover bg-center bg-no-repeat">
      <HomeScreen/>
    </div>
  </StrictMode>
)
