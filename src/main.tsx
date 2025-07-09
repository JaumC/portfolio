import HomeScreen from './screens/HomeScreen.tsx'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

// Corrige altura da viewport mobile
const setVH = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
setVH()
window.addEventListener('resize', setVH)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div
      className="w-full bg-[#121317] flex justify-center text-white"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <HomeScreen />
    </div>
  </StrictMode>
)