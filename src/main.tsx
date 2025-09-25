import HomeScreen from './screens/HomeScreen.tsx'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { ModalProvider } from './components/ui/animated-modal.tsx'

// Corrige altura da viewport mobile
const setVH = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
setVH()
window.addEventListener('resize', setVH)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <div
        className="w-full bg-[#121317] flex justify-center overflow-x-hidden text-white"
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <HomeScreen />
      </div>
    </ModalProvider>
  </StrictMode>
)