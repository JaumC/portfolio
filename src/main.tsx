import HomeScreen from './screens/HomeScreen.tsx'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-full bg-zinc-900 h-screen flex justify-center text-white">
      <HomeScreen/>
    </div>
  </StrictMode>,
)
